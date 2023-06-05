import Task from "./Components/Task";
import TaskForm from "./Components/TaskForm";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])

  const addTask = (name) => {
    setTasks(prev => {
      return [...prev, {name: name, done: false}];
    })
  }

  const updateTaskDone = (index, status) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].done = status;
      return newTasks;
    })
  }

  const noCompletes = tasks.filter((task) => task.done).length;
  const noTasks = tasks.length;

  return (
    <main className="todo-main">
      <h1>{noCompletes}/{noTasks} Complete</h1>
      <TaskForm addTask={addTask}/>
      {tasks.map((task, index) => (
        <Task {...task} onToggle={done => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;