import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState();

  function handleNewItemChange(event) {
    const value = event.target.value;
    setNewItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="New Item"
          value={newItem}
          onChange={handleNewItemChange}
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
