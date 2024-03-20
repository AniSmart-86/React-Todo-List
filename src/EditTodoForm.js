import React, {useState} from 'react'

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <div className='input-container'>
        <input type='text' className='Todo-input' value={value} placeholder='Edit Task'
        onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update</button>
        </div>
       
    </form>
  )
}
