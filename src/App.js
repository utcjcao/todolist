import "./App.css";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = formData.get("newTask");
    setTasks((tasks) => [...tasks, { name: newTask, id: Date.now() }]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <div>
      <TaskAdder handleSubmit={addTask}></TaskAdder>
      {tasks.map((task, index) => (
        <Task
          key={index}
          id={task.id}
          name={task.name}
          deleteTask={() => deleteTask(task.id)}
        ></Task>
      ))}
    </div>
  );
}

export default App;
