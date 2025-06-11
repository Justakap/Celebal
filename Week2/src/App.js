import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // all
  });

  return (
    <div className="planner-container">
      <h1 className="main-heading">To Do List</h1>

      <div className="todo-box">
        <h2>To Do list</h2>

        <div className="input-area">
          <input
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask} disabled={!input.trim()}>
            Add
          </button>
        </div>

        <div className="filters">
          <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
          <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>Pending</button>
        </div>

        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li key={task.id} className={`task ${task.completed ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
              <button onClick={() => removeTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
