import React, { useState, useContext } from "react";
import { TodoContext } from "../../App";
import "./TodoList.css";

const TodosList = () => {
  const { setTodos, todos } = useContext(TodoContext);

  const [selectedEdit, setSelectedEdit] = useState(-1);
  const [updatingInput, setUpdatingInput] = useState("");

  const deleteTodo = (id) => {
    setTodos((preState) => {
      return preState.filter((pre) => pre.id !== id);
    });
  };

  const editClicked = (todo) => {
    setSelectedEdit(todo?.id);
    setUpdatingInput(todo?.name);
  };

  const updateTodo = () => {
    setTodos((preState) => {
      return preState.map((pre) => {
        if (pre.id === selectedEdit) {
          let updatedTodo = {
            id: pre.id,
            name: updatingInput,
          };

          return updatedTodo;
        }
        return pre;
      });
    });

    setSelectedEdit(-1);
  };

  return (
    <div className="todo-wrapper">
      {todos?.length > 0 ? (
        todos?.map((todo) => {
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
                  <button onClick={() => updateTodo()}>Update</button>
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
