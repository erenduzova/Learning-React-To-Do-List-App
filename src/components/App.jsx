import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleNewItemChange(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }

  function handleAddButtonClick(event) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
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
        <button onClick={handleAddButtonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li key="{item}">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
