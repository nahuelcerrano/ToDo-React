import React, { useState } from 'react'

import styles from './CreateTask.module.css'

const CreateTask = ({addTask}) => {
  
  const [form, setFrom] = useState({
    state: false,
    task: '',
    description: '',
  })

  const handleCreate = (e) => {
    const { name, value } = e.target
    
    setFrom({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(false, form.task, form.description)
    e.target.reset()
  }  


  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <h2>New Task</h2>
        <h4>Please complete the inputs to add new taks to the list</h4>
        <div className={styles["box-form"]}>  
          <input maxLength={22} className="input-text" type="text" name="task" placeholder="Task" onChange={handleCreate} required />
          <input maxLength={22} className="input-text" type="text" name="description" placeholder="Description" onChange={handleCreate} required />
          <button className={styles["btn"]}>Add Task</button>
        </div>
      </div>
    </form>
  )
}

export default CreateTask