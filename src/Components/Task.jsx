import { useState } from "react";
import CheckBox from "./CheckBox";

const Task = ({name, done, onToggle}) => {
  return (
    <div className="task-item">
      <CheckBox status={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  )
}

export default Task;