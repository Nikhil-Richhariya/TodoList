import React, { useState } from 'react'
import TodoCard from './TodoCard'


const TodoList = ({todos,handleDeleteTodos,handleUpdateTodos}) => {

  return (
    <ul className='list'>
      {
        todos.map((task, idx) => {
          return (
            <TodoCard idx = {idx} handleDeleteTodos = {handleDeleteTodos} handleUpdateTodos = {handleUpdateTodos}>
              <p>{task}</p>
            </TodoCard>
          )
        })
      }
    </ul>
  )
}

export default TodoList