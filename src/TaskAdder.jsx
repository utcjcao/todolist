import React, { useState } from "react";

function TaskAdder({ handleSubmit }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(taskName);
    setTaskName("");
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskAdder;
