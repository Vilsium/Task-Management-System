import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const [showTasks, setShowTasks] = useState(true);

  // Fetch tasks from backend
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(() => setError("Failed to load tasks"));
  }, []);

  // Update filtered tasks whenever filter or tasks change
  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === filter));
    }
  }, [tasks, filter]);

  const handleAddTask = (task) => setTasks([...tasks, task]);

  const handleDeleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
        setTasks(tasks.filter((task) => task.id !== id));
      } catch {
        setError("Failed to delete the task");
      }
    }
  };

  const handleUpdateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const toggleTaskListVisibility = () => setShowTasks(!showTasks);

  return (
    <div className="app-container">
      <h1>Task Management System</h1>
      {error && <p className="error-message">{error}</p>}
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter onFilterChange={setFilter} />
      <button className="toggle-tasks-btn" onClick={toggleTaskListVisibility}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>
      {showTasks && (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default App;
