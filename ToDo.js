import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='ToDo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}
      `}>{task.task}</p>
    

    <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
    
  )
}
