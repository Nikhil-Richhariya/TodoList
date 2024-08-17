import React from 'react'
// import { SquarePen } from 'lucide-react';
// import { Trash2 } from 'lucide-react';

const TodoCard = (props) => {
  const { children, handleDeleteTodos, idx, handleUpdateTodos } = props;

  return (
    <li className='todo-item'>
      {children}
      <div className="manage-task-list-item">
        <i class="fa-solid fa-arrow-up-right-from-square"
          onClick={() => {
            handleUpdateTodos(idx);
          }}>
        </i>
        <i class="fa-solid fa-trash"
          onClick={() => { handleDeleteTodos(idx) }}>
        </i>
      </div>
    </li>
  )
}

export default TodoCard