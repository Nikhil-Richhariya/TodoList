
import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos, handleDeleteTodos, handleUpdateTodos, handleIsComplete }) => {
  return (
    <ul className='list'>
      {
        todos.map((task, idx) => {

          const {content,done} = task ;  
          // console.log("11111111task : ", task)
          // console.log("111contnet",content)
          return (
            <TodoCard 
              key={idx} 
              idx={idx} 
              handleDeleteTodos={handleDeleteTodos} 
              handleUpdateTodos={handleUpdateTodos} 
              handleIsComplete={handleIsComplete} 
              done={done}
            >
              <p>{content}</p>
            </TodoCard>
          )
        })
      }
    </ul>
  )
}

export default TodoList