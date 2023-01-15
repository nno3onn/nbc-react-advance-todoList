import { useDispatch } from "react-redux";
import { postTodos } from "../redux/modules/todosSlice";

const useInputs = ({ title, content, setTitle, setContent }) => {
  const dispatch = useDispatch();

  const handlePostTodo = () => {
    if (!title || !content) {
      return alert("모든 값을 입력해주세요.");
    }
    dispatch(postTodos({ title, content }));
    setTitle("");
    setContent("");
  };

  return handlePostTodo;
};

export default useInputs;
