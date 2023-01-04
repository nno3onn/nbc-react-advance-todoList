import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/modules/todosSlice";

const useTodoUpdate = ({ id, title, content }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleIsEdit = () => setIsEdit(true);

  const handleEditTitle = ({ target: { value } }) => setEditTitle(value);

  const handleEditContent = ({ target: { value } }) => setEditContent(value);

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
