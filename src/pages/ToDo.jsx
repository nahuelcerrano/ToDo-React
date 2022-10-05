import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

import styles from './ToDo.module.css'
import CreateTask from '../components/CreateTask'
import ShowTask from '../components/ShowTask'

const ToDo = () => {

  const [allTask, setAllTask] = useState([])
  const [keyTask, setKeyTask] = useState(0)
  
  const addTask = (state, task, description) => {
    setKeyTask(prev => prev + 1)

    setAllTask((prev) => [...prev, {
      key: keyTask,
      state: state,
      task: task,
      description: description,
    }])
  }
  
  const editTask = (key, state) => {
    let helperTask = allTask.slice()
    const index = allTask.findIndex(task => parseInt(task.key) === parseInt(key))
    helperTask[index].state = state
    setAllTask(helperTask)
  }

  const deleteTask = (index) => {
    const newTask = allTask.filter((item) => item.key !== index)
    setAllTask(newTask)
  }

  return (
    <div className={styles['main-box']}>
      <h1>ToDo List <FontAwesomeIcon icon={faAddressBook} /> </h1>
      <CreateTask addTask={addTask}/>
      <ShowTask allTask={allTask} editTask={editTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default ToDo