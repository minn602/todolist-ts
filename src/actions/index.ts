//투두 추가하는 액션
export const addTodoAction = (todo: string) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

//투두 체크하는 액션
export const toggleCheckingAction = (id: number) => {
  return {
    type: "TOGGLE_CHECKING",
    payload: id,
  };
};

//투두 삭제하는 액션
export const deleteTodoAction = (id: number) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
