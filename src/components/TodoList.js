import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/modules/todosSlice";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Block>
      {todos.map((todo) => (
        <TodoCard key={todo.id} data={todo} />
      ))}
    </Block>
  );
};

const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 50px;
`;

export default TodoList;
