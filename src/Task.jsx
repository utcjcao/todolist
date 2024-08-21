import React from "react";

function Task({ id, name, deleteTask }) {
  return (
    <div>
      <p>{name}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
