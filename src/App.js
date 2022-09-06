import React, { useEffect, useState } from "react";
import "./App.css";
import InputWrapper from "./components/inputWrapper/InputWrapper";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <InputWrapper setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
