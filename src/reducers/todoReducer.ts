//리듀서함수는 인자로 1. 상태, 2. 액션을 받는다.
export const todoReducer = (state: Todo[] = [], action: AddTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100),
          content: action.payload,
          checked: false,
        },
      ];
    case "TOGGLE_CHECKING":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      );
    case "DELETE_TODO":
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    default:
      return state;
  }
};
