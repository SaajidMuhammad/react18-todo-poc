import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import InputWrapper from "./components/inputWrapper/InputWrapper";
import TodoList from "./components/todoList/TodoList";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, setTodos }}>
        <InputWrapper />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
