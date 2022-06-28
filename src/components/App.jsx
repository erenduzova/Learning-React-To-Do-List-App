import React, { useState } from "react";

import ListItem from "./ListItem.jsx";
import NewItemArea from "./NewItemArea";

function App() {
  const [items, setItems] = useState([]);

  function handleAddButtonClick(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
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
      <NewItemArea addButtonC={handleAddButtonClick} />
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
