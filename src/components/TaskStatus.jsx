import React from 'react';

const TaskStatus = ({ tasks, onComplete, resolved }) => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-medium mb-2">Task Status</h1>
      </div>

      <div children="shadow-md rounded-lg p-4 mt-4 bg-white">
        {tasks.length === 0 && (
          <p className="text-sm text-gray-500">
            No tasks in progress
          </p>
        )}

        {tasks.map(task => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-md p-4 mb-3"
          >
            <div className=" justify-center p-3 items-center">
              <h4 className="font-semibold text-gray-800 text-lg">
                {task.title}
              </h4>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {task.description}
              </p>

              <button
                onClick={() => onComplete(task)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resolved Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-green-600 mb-2">
          Resolved
        </h3>

        {resolved.length === 0 && (
          <p className="text-sm text-gray-500">
            No resolved tickets yet
          </p>
        )}

        {resolved.map(ticket => (
          <div
            key={ticket.id}
            className="bg-white rounded-lg shadow-md p-4 mb-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-800">
                {ticket.title}
              </h4>
              <span className="text-green-500 text-sm">
                Completed
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;