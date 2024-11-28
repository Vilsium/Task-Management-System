// TaskItem.js
import React from "react";
import axios from "axios";

const TaskItem = ({ task }) => {
  const { id, title, description, due_date, status } = task;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        alert("Task deleted!");
        window.location.reload(); // Reload the tasks list
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error);
      });
  };

  const handleToggleStatus = () => {
    const newStatus = status === "pending" ? "completed" : "pending";
    axios
      .put(`http://localhost:5000/tasks/${id}`, { status: newStatus })
      .then((response) => {
        alert("Task status updated!");
        window.location.reload(); // Reload the tasks list
      })
      .catch((error) => {
        console.error("There was an error updating the task status!", error);
      });
  };

  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Status: {status}</p>
      <button onClick={handleToggleStatus}>
        {status === "pending" ? "Mark as Completed" : "Mark as Pending"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
