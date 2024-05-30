import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    propertyName: "",
    group: "Exited",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.propertyName) {
      setTasks((prevTasks) => [...prevTasks, taskData]);
      setTaskData({ propertyName: "", group: "Exited" });
    }
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="propertyName"
          value={taskData.propertyName}
          className="task_input"
          placeholder="Enter property name"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <select
              name="group"
              value={taskData.group}
              className="task_status"
              onChange={handleChange}
            >
              <option value="Exited">Cleanings Required</option>
              <option value="Full Property List">Cleanings Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Property
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
