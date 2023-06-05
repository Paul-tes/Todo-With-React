import React, { useState } from 'react';

const TaskForm = ({addTask}) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(taskName)
    setTaskName('');
  }

  return (
    <form onSubmit={(handleSubmit)}>
      <button type="submit">+</button>
      <input type="text" value={taskName} placeholder="Your next task... " onChange={(e) => { setTaskName(e.target.value); }} />
    </form>
  );
};

export default TaskForm;
