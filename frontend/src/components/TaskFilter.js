import React from "react";
import "./TaskFilter.css";

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div className="task-filter">
      <h4>Filter Tasks</h4>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
