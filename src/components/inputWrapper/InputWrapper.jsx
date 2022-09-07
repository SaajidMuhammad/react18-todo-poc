import React, { useState, useContext } from "react";
import { TodoContext } from "../../App";
import "./InputWrapper.css";

const InputWrapper = () => {
  const { setTodos, todos } = useContext(TodoContext);

  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput !== "") {
      setTodos((preState) => {
        const newTodoItem = {
          id: preState.length + 1,
          name: todoInput,
        };
        return preState.concat(newTodoItem);
      });

      setTodoInput("");
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        value={todoInput}
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

export default InputWrapper;
