import React from "react";

function ThingsToDo({ list }) {
  return (
    <div className="list">
      {list.map((item, index) => (
        <label key={index} className="todo-item">
          <input type="checkbox" />
          {item}
        </label>
      ))}
    </div>
  );
}

export default ThingsToDo;
