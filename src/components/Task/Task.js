import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Task.css";

const Task = ({ task, ...props }) => {
  const ActionButton = () => (
    <div className="ActionButton">
      {!task.done ? (
        <FontAwesomeIcon icon={faCheck} onClick={props.doneTask} title="Done" />
      ) : (
        <FontAwesomeIcon
          icon={faTimes}
          onClick={props.deleteTask}
          title="Delete"
        />
      )}
    </div>
  );

  const className = "task" + (task.done ? "-done" : "");

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionButton />
    </div>
  );
};

export default Task;
