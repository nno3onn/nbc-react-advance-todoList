import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../redux/modules/todosSlice";

const useInputs = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeTitle = ({ target: { value } }) => setTitle(value);
  const changeContent = ({ target: { value } }) => setContent(value);

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
