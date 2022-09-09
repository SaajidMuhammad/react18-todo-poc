import React, { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";

const TodoState = (props) => {
  const initialTodoState = {
    todoList: [],
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
    <TodoContext.Provider
      value={{ todoState, addTodo, deleteTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
