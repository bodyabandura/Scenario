import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/Tasks/TaskForm/TaskForm";
import TaskColumn from "./components/Tasks/TaskColumn/TaskColumn";
import propertiesData from "./data/properties.json";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(oldTasks) || propertiesData.properties
  );
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return;
    const taskMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskMove,
      group: status,
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          title="Cleanings Required"
          tasks={tasks}
          status="Exited"
          handleDelete={handleDelete}
        />
        <TaskColumn
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          title="Cleanings Pending"
          tasks={tasks}
          status="Cleanings Pending"
          handleDelete={handleDelete}
        />
        <TaskColumn
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          title="Cleanings Done"
          tasks={tasks}
          status="Full Property List"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
