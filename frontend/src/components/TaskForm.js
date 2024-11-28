import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newTask = await response.json();
    onAddTask({ ...formData, id: newTask.id });
    setFormData({
      title: "",
      description: "",
      due_date: "",
      status: "pending",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Task Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={formData.description}
        placeholder="Task Description"
        onChange={handleChange}
      ></textarea>
      <input
        type="date"
        name="due_date"
        value={formData.due_date}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
