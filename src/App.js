import Task from "./Components/Task";
import TaskForm from "./Components/TaskForm";
import './App.css';

function App() {
  return (
    <main className="todo-main">
      <TaskForm />
      <Task />
      <Task />
      <Task />
      <Task />
    </main>
  );
}

export default App;