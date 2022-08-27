import React, { useState } from "react";
import "./InputWrapper.css";

const InputWrapper = ({ setTodos, todos }) => {
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    let existingTodos = todos;
    existingTodos.push(todoInput);
    // console.log(existingTodos, "existingTodos");
    setTodos(["test", "test1", "test2", "new"]);
    // setTodos((preState) => [{ ...preState, todoInput }]);
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
      {/* 
      <button
        onClick={() => {
          setTest("update");
        }}
      >
        test
      </button> */}
    </div>
  );
};

export default InputWrapper;
