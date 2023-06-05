import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('T1');

  return (
    <form action="#">
      <button type="submit">+</button>
      <input type="text" value={taskName} placeholder="Your next task... " onChange={(e) => { setTaskName(e.target.value); }} />
    </form>
  );
};

export default TaskForm;
