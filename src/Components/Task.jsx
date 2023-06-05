import { useState } from "react";
import CheckBox from "./CheckBox";

const Task = ({name, done, onToggle}) => {
  return (
    <div className={'task-item ' + (done ? 'done' : '')}>
      <CheckBox status={done} onClick={() => onToggle(!done)} />
      <span>{name}</span>
    </div>
  )
}

export default Task;