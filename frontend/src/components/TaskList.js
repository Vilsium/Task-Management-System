import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const handleToggleStatus = async (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "pending" ? "completed" : "pending",
    };

    try {
      await fetch(`http://localhost:5000/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      onUpdateTask(updatedTask);
    } catch {
      alert("Failed to update task status");
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div className={`task-item ${task.status}`} key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.due_date}</p>
            <div className="task-buttons">
              <div className="status-toggle">
                <span>
                  {task.status === "pending" ? "Pending" : "Completed"}
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => handleToggleStatus(task)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
