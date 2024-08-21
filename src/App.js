import "./App.scss";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(taskName) {
    if (taskName.trim() === "") return;
    setTasks((tasks) => [...tasks, { name: taskName, id: Date.now() }]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <div>
      <TaskAdder handleSubmit={addTask}></TaskAdder>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          deleteTask={deleteTask}
        ></Task>
      ))}
    </div>
  );
}

export default App;
