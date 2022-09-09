import React from "react";
import "./App.css";
import InputWrapper from "./components/inputWrapper/InputWrapper";
import TodoList from "./components/todoList/TodoList";
import TodoState from "./contexts/TodoState";

function App() {
  return (
    <div className="App">
      <TodoState>
        <InputWrapper />
        <TodoList />
      </TodoState>
    </div>
  );
}

export default App;
