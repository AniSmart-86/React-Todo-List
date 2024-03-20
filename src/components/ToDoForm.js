import React, {useState} from 'react'
import { ToDo } from './ToDo';

export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <div className='input-container'>
        <input type='text' className='Todo-input' value={value} placeholder='What are you doing today?'
        onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
        </div>
       
    </form>
  )
}
