import React, { useEffect, useState, createContext, useReducer } from "react";
import "./App.css";
import InputWrapper from "./components/inputWrapper/InputWrapper";
import TodoList from "./components/todoList/TodoList";

export const TodoContext = createContext();

function App() {
  const initialTodoState = {
    todoList: [],
  };

  const todoReducer = (state, action) => {
    if (action.type === "addTodoItem") {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    } else if (action.type === "deleteTodoItem") {
      return {
        ...state,
        todoList: action.payload,
      };
    } else if (action.type === "updatedTodoItem") {
      return {
        ...state,
        todoList: action.payload,
      };
    } else {
      return { ...state };
    }
  };

  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState);

  const addTodo = (todoInputText) => {
    if (todoInputText !== "") {
      const newTodoItem = {
        id: Date.now() + Math.floor(Math.random() * 10),
        name: todoInputText,
      };
      todoDispatch({ type: "addTodoItem", payload: newTodoItem });
    }
  };

  const deleteTodo = (todoId) => {
    const filteredTodoList = todoState.todoList.filter(
      (singleTodo) => singleTodo.id !== todoId
    );
    todoDispatch({ type: "deleteTodoItem", payload: filteredTodoList });
  };

  const updateTodo = (todoId, updatingInput) => {
    if (updatingInput !== "") {
      const updatedTodoList = todoState.todoList.map((singleTodo) => {
        if (singleTodo.id === todoId) {
          const updatedTodo = {
            ...singleTodo,
            name: updatingInput,
          };

          return updatedTodo;
        }
        return singleTodo;
      });
      todoDispatch({ type: "updatedTodoItem", payload: updatedTodoList });
    }
  };

  return (
    <div className="App">
      <TodoContext.Provider
        value={{ addTodo, deleteTodo, updateTodo, todoState }}
      >
        <InputWrapper />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
