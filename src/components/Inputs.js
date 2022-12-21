import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postTodos } from "../redux/modules/todosSlice";

const Inputs = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handlePostTodo = () => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    if (!title || !content) {
      return alert("모든 값을 입력해주세요.");
    }

    dispatch(postTodos({ title, content }));
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <Container>
      <Wrapper>
        <h4>제목</h4>
        <Input ref={titleRef} />
        <h4>내용</h4>
        <Input ref={contentRef} />
        <ButtonWrapper>
          <CreateButton onClick={handlePostTodo}>작성</CreateButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e1fce9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 360px;
`;
const Input = styled.input`
  height: 30px;
  border: 1px solid #eee;
  background-color: white;
  border-radius: 8px;
  padding: 5px 20px;
  outline: none;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const CreateButton = styled.button`
  margin-top: 20px;
  width: 80px;
  background-color: white;
  border-radius: 20px;
  border: none;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default Inputs;
