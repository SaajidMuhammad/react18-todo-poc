import React from "react";
import "./Todos.css";

const Todos = (props) => {
  console.log(props, "props");

  return (
    <div className="todo-wrapper">
      {props.todos.map((todo, i) => {
        return (
          <div className="single-todo">
            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <div>{todo}</div>
            </div>

            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
