import React from "react";
import "./TodoList.css";

const TodosList = ({ todos, setTodos }) => {
  const deleteTodo = (index) => {
    todos.splice(index, 1);

    setTodos(todos);

    // console.log(todos, "todos list after remove");
  };

  return (
    <div className="todo-wrapper">
      {todos?.map((todo, index) => {
        return (
          <div className="single-todo" key={todo?.id}>
            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <div>{todo?.name}</div>
            </div>

            <div>
              <button>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        );
      })}

      {/* <div>{test}</div> */}
    </div>
  );
};

export default TodosList;
