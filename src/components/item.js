import React from "react";
import "./item.css";
function item(props) {
  const {editable, item, onClick, handleDoubleClick, handleOnKeyPress, index} = props
  return (
    <div className="item-style">
      {
        editable ? (
          <input type="text" onKeyPress={(e) => handleOnKeyPress(e, index)} defaultValue={item.name} />
        ) : (
          <h3  onDoubleClick={handleDoubleClick}>{item.name}</h3>
        )
      }

      <h3>{item.calorie}</h3>
      <button
        name={item.name}
        className="remove-button"
        onClick={onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default item;
