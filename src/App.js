import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import Todos from "./components/todos/Todos";

function App() {
  const [todos, setTodos] = useState(["test", "test1", "test2"]);

  useEffect(() => {
    console.log("money recived");
  }, [todos]);

  return (
    <div className="App">
      <Input setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
