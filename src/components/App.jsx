import React, { useState } from "react";

import ListItem from "./ListItem.jsx";

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
    setNewItem("");
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
          {items.map((item, i) => {
            return <ListItem key={i} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
