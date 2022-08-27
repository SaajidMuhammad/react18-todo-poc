import React, { useEffect, useState } from "react";
import "./App.css";
import InputWrapper from "./components/inputWrapper/InputWrapper";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test2",
    },
    {
      id: 3,
      name: "test1",
    },
    {
      id: 4,
      name: "test2",
    },
    {
      id: 5,
      name: "test3",
    },
  ]);

  return (
    <div className="App">
      <InputWrapper setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
