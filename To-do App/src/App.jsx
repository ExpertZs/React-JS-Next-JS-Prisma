import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/to-do-list.svg";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, { description: task, status: "pending" }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleStatus = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  const totalTasks = tasks.length;

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundColor: "purple",
      }}
    >
      <div
        style={{
          display: "Grid",
          gridTemplateRows: "auto 1fr auto",
          gap: "1rem",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>To-Do App</h1>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            style={{
              backgroundColor: "blue",
              marginRight: "10px",
              padding: "10px",
            }}
          />
          <button type="submit" style={{ backgroundColor: "green" }}>
            Add Task
          </button>
        </form>
        <br></br>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Todo item</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  style={{
                    textDecoration:
                      task.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {task.description}
                </td>
                <td>{task.status}</td>
                <td>
                  <button
                    onClick={() => toggleStatus(index)}
                    style={{ backgroundColor: "green", marginRight: "10px" }}
                  >
                    {task.status === "completed" ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => removeTask(index)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>Total Tasks: {totalTasks}</p>
      </div>
    </div>
  );
};

export default TodoList;
