import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [form, setForm] = useState({
    state: false,
    task: "",
    description: "",
  });

  const handleCreate = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(false, form.task, form.description);
    e.target.reset();
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">New Task</h2>
      <h4 className="text-gray-500 mb-4">
        Please complete the inputs to add a new task to the list
      </h4>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          maxLength={22}
          type="text"
          name="task"
          placeholder="Task"
          onChange={handleCreate}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
        />
        <input
          maxLength={22}
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleCreate}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition-colors"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
