import React, { useState } from "react";

function NewItemArea(props) {
  const [newItem, setNewItemText] = useState("");

  function handleNewItemChange(event) {
    const newValue = event.target.value;
    setNewItemText(newValue);
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="New Item"
        value={newItem}
        onChange={handleNewItemChange}
      />
      <button
        onClick={() => {
          props.addButtonC(newItem);
          setNewItemText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default NewItemArea;
