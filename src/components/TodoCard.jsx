import React from 'react'
import CheckBox from './CheckBox';
// import { SquarePen } from 'lucide-react';
// import { Trash2 } from 'lucide-react';

const TodoCard = (props) => {
  const { children, handleDeleteTodos, idx, handleUpdateTodos, handleIsComplete, done } = props;

  return (
    <li className='todo-item'>
      {children}
      <div className="manage-task-list-item">


        <i className="fa-solid fa-pen-to-square"
          onClick={() => {
            handleUpdateTodos(idx);
          }}>
        </i>
        <i className="fa-solid fa-trash"
          onClick={() => { handleDeleteTodos(idx) }}>
        </i>

        <CheckBox done = {done} handleIsComplete = {handleIsComplete} idx = {idx} />

      </div>
    </li>
  )
}

export default TodoCard