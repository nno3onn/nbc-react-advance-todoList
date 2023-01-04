import styled from "styled-components";
import useTodo from "../hooks/useTodo";

const TodoCard = ({ data: { id, title, content } }) => {
  const { isEdit, editTitle, editContent, handleEditTitle, handleEditContent, handleUpdateTodo, handleDeleteTodo, handleIsEdit } = useTodo({
    id,
    title,
    content,
  });

  return (
    <Container>
      {isEdit ? (
        <>
          <input value={editTitle} onChange={handleEditTitle} />
          <input value={editContent} onChange={handleEditContent} />
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <Content>{content}</Content>
        </>
      )}

      <ButtonWrapper>
        {isEdit ? <DeletBtn onClick={() => handleUpdateTodo()}>완료</DeletBtn> : <DeletBtn onClick={handleIsEdit}>수정</DeletBtn>}
        <DeletBtn onClick={() => handleDeleteTodo(id)}>삭제</DeletBtn>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isDone ? "#f9f8f3" : "#fff")};
  border-top: 10px solid ${(props) => (props.isDone ? "#f19280" : "#35d282")};
`;
const Content = styled.div`
  margin-bottom: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;
const Button = styled.div`
  width: 60px;
  padding: 12px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  transition: all 0.5s;
  text-decoration: none;
  &:hover {
    box-shadow: 1px 1px 8px #aaa;
  }
`;
const DeletBtn = styled(Button)`
  background-color: #ddd;
`;

export default TodoCard;
