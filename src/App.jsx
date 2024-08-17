import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
const App = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("")

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos : newList}));
  }


  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  const handleDeleteTodos = (idx) => {
    const newTodoList = todos.filter((_, todoIdx) => {
      return todoIdx != idx;
    })

    persistData(newTodoList);
    setTodos(newTodoList);
  }

  const handleUpdateTodos = (idx) => {
    setTask(todos[idx]);
    handleDeleteTodos(idx);
  }

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
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleUpdateTodos={handleUpdateTodos} />
    </main>
  )
}

export default App