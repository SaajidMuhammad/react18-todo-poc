import React, { useState, useContext } from "react";
import TodoContext from "../../contexts/todo-context";
import "./InputWrapper.css";

const InputWrapper = () => {
  const { addTodo } = useContext(TodoContext);

  const [todoInputText, setTodoInputText] = useState("");

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        value={todoInputText}
        onChange={(e) => {
          setTodoInputText(e.target.value);
        }}
      />

      <button
        className="button"
        onClick={() => {
          addTodo(todoInputText);
          setTodoInputText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputWrapper;
