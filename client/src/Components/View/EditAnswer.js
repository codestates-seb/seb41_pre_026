import styled from "styled-components";

const EditorContainer = styled.div`
  border-top: 1px solid #e3e6e8;
  box-sizing: border-box;
  display: block;
  margin-top: 20px;
  padding-top: 10px;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .edit-answer-header {
    p {
      font-size: 19px;
      font-weight: 400;
      color: #232629;
    }
  }
`;
function EditAnswer() {
  return (
    <EditorContainer>
      <div className="edit-answer-header">
        <p>Your Answer</p>
      </div>
    </EditorContainer>
  );
}
export default EditAnswer;
