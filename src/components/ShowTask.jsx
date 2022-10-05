import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from './ShowTask.module.css'

const ShowTask = (props) => {
  
  const {allTask, editTask, deleteTask} = props
  
  const handleCheckbox = (e) => {
    const {id, checked} = e.target
    editTask(id, checked)
  }
  
  const handleDelete = (key) => {
    deleteTask(key)
  }

  return (
    <div className={styles['task-list']}>
      <h1>Taks list</h1>
      <ul>
        {allTask.map((incomingTask) => (
          <li key={incomingTask}>
            <input
            className={styles['checkbox']}
            id={incomingTask.key}
            onChange={handleCheckbox}
            type="checkbox"/>
          <span>{incomingTask.task}</span>
          <span>{incomingTask.description}</span>
          <button onClick={() => handleDelete(incomingTask.key)}><FontAwesomeIcon icon={faTrash}/></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowTask