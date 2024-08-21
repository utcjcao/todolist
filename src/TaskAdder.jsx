import React from "react";

function TaskAdder({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter task here:<input name="newTask"></input>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default TaskAdder;
