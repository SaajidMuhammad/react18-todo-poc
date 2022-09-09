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

export default todoReducer;
