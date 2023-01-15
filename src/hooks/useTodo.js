import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/modules/todosSlice";
import useInput from "./useInput";

const useTodoUpdate = ({ id, editTitle, editContent, setIsEdit }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => dispatch(deleteTodos(id));

  const handleUpdateTodo = () => {
    dispatch(updateTodos({ id, title: editTitle, content: editContent }));
    setIsEdit(false);
  };

  return { handleUpdateTodo, handleDeleteTodo };
};

export default useTodoUpdate;
