import React from 'react'
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const TodoCard = (props) => {
  const {children, handleDeleteTodos,idx,handleUpdateTodos} = props;

  return (
    <li className='todo-item'>
      {children}
      <div className="manage-task-list-item">
        <SquarePen className='SquarePen'
          onClick={() => {
            handleUpdateTodos(idx);
          }}
        />
        <Trash2 className='Trash2'

          onClick={() => {handleDeleteTodos(idx)}}
        
        /> 
      </div>
    </li>
  )
}

export default TodoCard