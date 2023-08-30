import React, { useState } from "react";
import "./ToDoApp.css";

function ToDoApp() {
  const [itemName, setItemName] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddTask = () => {
    if (itemName !== "" && toDo !== "") {
      setToDo([...toDo, itemName]);
      setItemName("");
    }
  };
  return (
    <div className="app-container">
      <div className="app-heading">ToDoApp</div>
      <div className="toDo-label">
        <input type="text" onChange={handleNameChange} value={itemName}></input>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="toDo-list">
        {toDo.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}

export default ToDoApp;
