import { useState } from "react";
import CreateTask from "../components/CreateTask";
import ShowTask from "../components/ShowTask";

const ToDo = () => {
  const [allTask, setAllTask] = useState([]);
  const [keyTask, setKeyTask] = useState(0);

  const addTask = (state, task, description) => {
    setKeyTask((prev) => prev + 1);

    setAllTask((prev) => [
      ...prev,
      {
        key: keyTask,
        state,
        task,
        description,
      },
    ]);
  };

  const editTask = (key, state) => {
    const helperTask = allTask.slice();
    const index = allTask.findIndex(
      (task) => parseInt(task.key) === parseInt(key)
    );
    helperTask[index].state = state;
    setAllTask(helperTask);
  };

  const deleteTask = (index) => {
    const newTask = allTask.filter((item) => item.key !== index);
    setAllTask(newTask);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          ToDo List
        </h1>
        <div className="mb-6">
          <CreateTask addTask={addTask} />
        </div>
        <ShowTask
          allTask={allTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default ToDo;
