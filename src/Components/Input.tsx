import React from "react";
import styled from "styled-components";

interface InputProps {
  updateInputVal: UpdateInputVal;
  inputVal: string;
  addTodo: AddTodo;
}

export const Input: React.FC<InputProps> = ({
  updateInputVal,
  inputVal,
  addTodo,
}) => {
  return (
    <React.Fragment>
      <InputForm onChange={updateInputVal} value={inputVal} type="text" />
      <Button onClick={() => addTodo(inputVal)} type="button">
        submit!
      </Button>
    </React.Fragment>
  );
};

const InputForm = styled.input`
  padding: 5px 7px;
  border: 1px solid palevioletred;
  border-radius: 12px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid palevioletred;
  border-radius: 4px;
  color: palevioletred;

  &:focus {
    outline: none;
  }
`;
