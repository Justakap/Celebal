import React from "react";

export default function TodoItem({ task, onToggle, onRemove }) {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <span>{task.text}</span>
      <button onClick={onRemove}>❌</button>
    </li>
  );
}
