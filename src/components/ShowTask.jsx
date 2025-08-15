const ShowTask = ({ allTask, editTask, deleteTask }) => {
  const handleCheckbox = (e) => {
    const { id, checked } = e.target;
    editTask(id, checked);
  };

  const handleDelete = (key) => {
    deleteTask(key);
  };

  return (
    <div className="mt-6  pl-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Task List</h1>

      {allTask.length === 0 ? (
        <p className="text-gray-500 italic">No hay tareas todavía.</p>
      ) : (
        <ul className="space-y-3">
          {allTask.map((incomingTask) => (
            <li
              key={incomingTask.key}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-xl shadow p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <input
                  id={incomingTask.key}
                  type="checkbox"
                  onChange={handleCheckbox}
                  checked={incomingTask.state}
                  className="h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <div>
                  <span className="block font-semibold text-gray-800">
                    {incomingTask.task}
                  </span>
                  <span className="block text-sm text-gray-500">
                    {incomingTask.description}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDelete(incomingTask.key)}
                className="mt-3 sm:mt-0 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-colors"
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowTask;
