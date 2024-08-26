import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
const App = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("")

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }


  const handleAddTodos = (newTodo) => {

    if (!newTodo) {
      return;
    }
    const newTodoList = [...todos, { content: newTodo, done: false }];
    
    setTodos(newTodoList);
    persistData(newTodoList);
    
  }

  const handleDeleteTodos = (idx) => {
    // console.log("berfore",todos)
    const newTodoList = todos.filter((_, index) => index !== idx);
    setTodos(newTodoList);
    // console.log("after",newTodoList)
    persistData(newTodoList); 
  };
  

  const handleUpdateTodos = (idx) => {
    setTask(todos[idx].content);
    handleDeleteTodos(idx);
  }

  const handleIsComplete = (idx) => {
    const newTodoList = todos.map((todoObj, todoIdx) => {
      if (todoIdx !== idx) return todoObj;
      return {content : todoObj.content, done : !todoObj.done};
    });

    persistData(newTodoList);
    setTodos(newTodoList);
  };

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem('todos');

    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} task={task} setTask={setTask} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleUpdateTodos={handleUpdateTodos} handleIsComplete={handleIsComplete} />
    </main>
  )
}

export default App