import React, { useState } from "react";

function Task({ id, name, deleteTask }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = (e) => {
    e.preventDefault();
    setIsDeleting(true);
    setTimeout(() => deleteTask(id), 300);
  };
  return (
    <div className={`task ${isDeleting ? "deleting" : ""}`}>
      <p>{name}</p>
      <input type="checkbox" value={id} onClick={handleDelete} />
    </div>
  );
}

export default Task;
