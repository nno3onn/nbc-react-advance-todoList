import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../redux/modules/todosSlice";
import useInput from "./useInput";

const useInputs = () => {
  const dispatch = useDispatch();
  const [title, setTitle, changeTitle] = useInput();
  const [content, setContent, changeContent] = useInput();

  const handlePostTodo = () => {
    if (!title || !content) {
      return alert("모든 값을 입력해주세요.");
    }
    dispatch(postTodos({ title, content }));
    setTitle("");
    setContent("");
  };

  return { title, content, changeTitle, changeContent, handlePostTodo };
};

export default useInputs;
