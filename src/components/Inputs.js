import React from "react";
import styled from "styled-components";
import useInputs from "../hooks/useInputs";

const Inputs = () => {
  const { title, content, changeTitle, changeContent, handlePostTodo } = useInputs();

  return (
    <Container>
      <Wrapper>
        <h4>제목</h4>
        <Input value={title} onChange={changeTitle} />
        <h4>내용</h4>
        <Input value={content} onChange={changeContent} />
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
