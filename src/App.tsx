import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Components/Input";
import { TodoList } from "./Components/TodoList";

const initTodo: Array<Todo> = [];

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState(initTodo);

  const updateInputVal: UpdateInputVal = (evt: InputEvt) => {
    setInputVal(evt.target.value);
  };

  const addTodo: AddTodo = (val) => {
    todos.length > 0
      ? setTodos([
          ...todos,
          {
            id: Math.floor(Math.random() * 100),
            content: val,
            checked: false,
          },
        ])
      : setTodos([
          {
            id: Math.floor(Math.random() * 100),
            content: val,
            checked: false,
          },
        ]);
    setInputVal("");
  };

  const toggleChecking: ToggleChecking = (selectedId) => {
    const newArr = todos.map((todo) => {
      if (todo.id === selectedId) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(newArr);
  };

  const deleteTodo: DeleteTodo = (selectedId) => {
    const newArr = todos.filter((todo) => todo.id !== selectedId);
    setTodos(newArr);
  };

  return (
    <Container>
      <h1>To Do List</h1>
      <Input
        updateInputVal={updateInputVal}
        inputVal={inputVal}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
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
