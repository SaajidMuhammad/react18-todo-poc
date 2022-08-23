import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    console.log("from parent", props.todos);

    let existingTodos = props.todos;

    existingTodos.push(todoInput);

    console.log("added by son", existingTodos);

    props.setTodos(existingTodos);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Input;
