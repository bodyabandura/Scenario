import React from "react";
import "./TaskCard.css";
import deleteIcon from "../../../assets/delete.png";

const TaskCard = ({ propertyName, handleDelete, setActiveCard, index }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text"> {propertyName}</p>

      <img
        onClick={handleDelete}
        src={deleteIcon}
        className="delete_icon"
        alt="Delete"
      />
    </article>
  );
};

export default TaskCard;
