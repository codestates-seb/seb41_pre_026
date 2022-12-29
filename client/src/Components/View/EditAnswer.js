import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import Editor from "../Share/Editor";

const EditorContainer = styled.div`
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
  .eidtor {
    height: 200px;
  }
`;
function EditAnswer() {
  return (
    <EditorContainer>
      <div className="edit-answer-header">
        <p>Your Answer</p>
        <div className="editor">
          <Editor />
        </div>
        <div>
          <StyledBlueBtn>Post Your Answer</StyledBlueBtn>
        </div>
      </div>
    </EditorContainer>
  );
}
export default EditAnswer;
