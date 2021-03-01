import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addTodoAction,
  deleteTodoAction,
  toggleCheckingAction,
} from "./actions";
import { Input } from "./Components/Input";
import { TodoList } from "./Components/TodoList";

// const initTodo: Array<Todo> = [];

const App: React.FC = () => {
  //1. input value state manage
  const [inputVal, setInputVal] = useState("");
  const updateInputVal: UpdateInputVal = (evt: InputEvt) => {
    setInputVal(evt.target.value);
  };

  //2. add todo feature
  //useSelector 함수를 사용하여 todos 상태값을 가져온다.
  const todos = useSelector<{ todoReducer: Todo[] }>(
    (state) => state.todoReducer
  );

  //3. 액션을 통해 리듀서 실행
  const dispatch = useDispatch();

  const addTodo = (val: string) => {
    dispatch(addTodoAction(val));
    setInputVal("");
  };

  const toggleChecking = (selectedId: number) => {
    dispatch(toggleCheckingAction(selectedId));
  };

  const deleteTodo = (selectedId: number) => {
    dispatch(deleteTodoAction(selectedId));
  };

  //리덕스 사용 전 코드
  // const [todos, setTodos] = useState(initTodo);

  // const addTodo: AddTodo = (val) => {
  //   todos.length > 0
  //     ? setTodos([
  //         ...todos,
  //         {
  //           id: Math.floor(Math.random() * 100),
  //           content: val,
  //           checked: false,
  //         },
  //       ])
  //     : setTodos([
  //         {
  //           id: Math.floor(Math.random() * 100),
  //           content: val,
  //           checked: false,
  //         },
  //       ]);
  //   setInputVal("");
  // };

  // const toggleChecking: ToggleChecking = (selectedId) => {
  //   const newArr = todos.map((todo) => {
  //     if (todo.id === selectedId) {
  //       todo.checked = !todo.checked;
  //     }
  //     return todo;
  //   });
  //   setTodos(newArr);
  // };

  // const deleteTodo: DeleteTodo = (selectedId) => {
  //   const newArr = todos.filter((todo) => todo.id !== selectedId);
  //   setTodos(newArr);
  // };

  return (
    <Container>
      <h1>To Do List</h1>
      <Input
        updateInputVal={updateInputVal}
        inputVal={inputVal}
        addTodo={addTodo}
      />
      <TodoList
        // todos={todos}
        toggleChecking={toggleChecking}
        deleteTodo={deleteTodo}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 10px;
  border: 1px solid palevioletred;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: palevioletred;
  }
`;
