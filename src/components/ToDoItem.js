import React from "react";
import "../style.css";

function ToDoItem(props) {
  // console.log(props);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleChange(props.item.id);
        }}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
