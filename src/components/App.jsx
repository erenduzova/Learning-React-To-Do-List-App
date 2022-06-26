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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
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
          {items.map((item, index) => {
            return (
              <ListItem
                key={index}
                id={index}
                item={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
