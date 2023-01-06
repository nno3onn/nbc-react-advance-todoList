import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/modules/todosSlice";
import useInput from "./useInput";

const useTodoUpdate = ({ id, title, content }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, _, handleEditTitle] = useInput(title);
  const [editContent, _, handleEditContent] = useInput(content);

  const handleIsEdit = () => setIsEdit(true);

  const handleDeleteTodo = () => {
    dispatch(deleteTodos(id));
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodos({ id, title: editTitle, content: editContent }));
    setIsEdit(false);
  };

  return { isEdit, editTitle, editContent, handleEditTitle, handleEditContent, handleUpdateTodo, handleDeleteTodo, handleIsEdit };
};

export default useTodoUpdate;
