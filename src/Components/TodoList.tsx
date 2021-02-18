import React from "react";
import styled from "styled-components";

interface TodoListProps {
  todos: Array<Todo>;
  toggleChecking: ToggleChecking;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleChecking,
  deleteTodo,
}) => {
  return (
    <ListContainer>
      {todos.map((todo) => {
        return (
          <ListItem checked={todo.checked}>
            <label>
              <input
                onClick={() => toggleChecking(todo.id)}
                type="checkbox"
                checked={todo.checked}
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
