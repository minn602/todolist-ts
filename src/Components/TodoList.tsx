import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface TodoListProps {
  toggleChecking: ToggleChecking;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  toggleChecking,
  deleteTodo,
}) => {
  const todos: any = useSelector<{ todoReducer: Todo[] }>(
    (state) => state.todoReducer
  );
  return (
    <ListContainer>
      {todos?.map((todo: Todo, idx: number) => {
        return (
          <ListItem key={idx} checked={todo.checked}>
            <label>
              <input
                onClick={() => toggleChecking(todo.id)}
                type="checkbox"
                defaultChecked={todo.checked}
              />
            </label>
            {todo.content}
            <DeleteButton onClick={() => deleteTodo(todo.id)} type="button">
              🌼
            </DeleteButton>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  list-style: none;
`;

const ListItem = styled.li<{ checked: boolean }>`
  padding: 0;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
