import { useState } from "react";
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
  p {
    font-size: 19px;
    font-weight: 400;
    color: #232629;
    margin: 0px;
  }
  .editor {
    margin-top: 20px;
  }
  .button-container {
    margin-top: 10px;
  }
`;
function EditAnswer() {
  const [value, setValue] = useState("**Hello world!!!**");

  const handleClick = () => {
    console.log(value);
  };

  return (
    <EditorContainer>
      <p>Your Answer</p>
      <div className="editor">
        <Editor value={value} setValue={setValue} />
      </div>
      <div className="button-container">
        <StyledBlueBtn onClick={handleClick}>Post Your Answer</StyledBlueBtn>
      </div>
    </EditorContainer>
  );
}
export default EditAnswer;
