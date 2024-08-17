import React, { useState } from 'react'

const TodoInput = (props) => {
    const { handleAddTodos, task, setTask } = props;

    return (
        <header>
            <input type="text" placeholder="Enter task..." 
            
                value = {task}
                onChange={(e) => setTask(e.target.value)}
            
            
            />
            <button id='add'
                onClick={() => { handleAddTodos(task); setTask("")  }}

            >Add</button>
        </header>
    )
}

export default TodoInput