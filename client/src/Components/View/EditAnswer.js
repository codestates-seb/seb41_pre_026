import { useState } from "react";
import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import Editor from "../Share/Editor";
import axios from "axios";
import Cookie from "../../util/cookie";

const EditorContainer = styled.div`
  box-sizing: border-box;
  display: block;
  padding-top: 20px;
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
    margin-top: 10px;
  }
  .button-container {
    margin-top: 20px;
  }
`;
function EditAnswer({ handleChange, qid }) {
  const [value, setValue] = useState("**Hello world!!!**");
  const cookie = new Cookie();

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://43.200.68.32:8080/answers/",
      data: {
        mid: cookie.get("userId"),
        qid,
        answerContent: value,
      },
    }).then((res) => {
      console.log(res.data);
      handleChange();
    });
  };

  return (
    <EditorContainer>
      <p>Your Answer</p>
      <div className="editor">
        <Editor value={value} setValue={setValue} type={1} />
      </div>
      <div className="button-container">
        <StyledBlueBtn onClick={handleClick}>Post Your Answer</StyledBlueBtn>
      </div>
    </EditorContainer>
  );
}
export default EditAnswer;
