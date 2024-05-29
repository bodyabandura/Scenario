import React from "react";
import "./TaskColumn.css";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../../ui/dragAnDrop/DropArea";

const TaskColumn = ({
  title,

  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{title}</h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      <div className="task_column_content">
        {tasks.map((task, index) => (
          <React.Fragment key={task._id}>
            {task.group === status && (
              <React.Fragment>
                <TaskCard
                  propertyName={task.propertyName}
                  handleDelete={() => handleDelete(index)}
                  setActiveCard={setActiveCard}
                  index={index}
                />
                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TaskColumn;
