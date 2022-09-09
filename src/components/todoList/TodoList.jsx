import React, { useState, useContext } from "react";
import { TodoContext } from "../../App";
import "./TodoList.css";

const TodosList = () => {
  const { todoState, deleteTodo, updateTodo } = useContext(TodoContext);

  const [selectedEdit, setSelectedEdit] = useState(-1);
  const [updatingInput, setUpdatingInput] = useState("");

  const editClicked = (todo) => {
    setSelectedEdit(todo?.id);
    setUpdatingInput(todo?.name);
  };

  return (
    <div className="todo-wrapper">
      {todoState?.todoList?.length > 0 ? (
        todoState?.todoList?.map((todo) => {
          return (
            <div className="single-todo" key={todo?.id}>
              <div className="checkbox-wrapper">
                {todo?.id === selectedEdit ? (
                  <input
                    defaultValue={todo?.name}
                    onChange={(e) => {
                      setUpdatingInput(e.target.value);
                    }}
                  />
                ) : (
                  <div>{todo?.name}</div>
                )}
              </div>

              <div>
                {todo?.id === selectedEdit ? (
                  <button
                    onClick={() => {
                      updateTodo(selectedEdit, updatingInput);
                      setSelectedEdit(-1);
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <>
                    <button onClick={() => editClicked(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(todo?.id)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-todos"> Empty Todos </div>
      )}
    </div>
  );
};

export default TodosList;
