import styled from "styled-components";
import Header from "../Components/Ask/Header";
import Title from "../Components/Ask/Title";
import Problem from "../Components/Ask/Problem";
import Expect from "../Components/Ask/Expect";
import Tags from "../Components/Ask/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";
import { useState } from "react";

const StyledDiv = styled.div`
  button:nth-child(2) {
    margin: 0px 0px 0px 16px;
  }

  .invisible {
    display: none;
  }

  .disabledBtn {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

function Ask() {
  const [focus, setFocus] = useState("Title");
  const [isWritten, setIsWritten] = useState([]);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [expect, setExpect] = useState("");
  const [tags, setTags] = useState("");

  const handleFocusChange = (focus) => {
    setFocus(focus);
  };

  const handleIsWrittenChange = (el) => {
    setIsWritten([...isWritten, el]);
  };

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleProblemChange = (problem) => {
    setProblem(problem);
  };

  const handleExpectChange = (expect) => {
    setExpect(expect);
  };

  const handleTagsChange = (tag) => {
    setTags(tag);
  };

  const handleBlueBtnClick = () => {
    console.log("title", title);
    console.log("problem", problem);
    console.log("expect", expect);
    console.log("tags", tags);
  };

  const handleTransRedBtnClick = () => {
    setFocus("Title");
    setIsWritten([]);
    setTitle("");
    setProblem("");
    setExpect("");
    setTags("");
  };

  return (
    <main>
      <Header focus={focus} handleFocusChange={handleFocusChange} />
      <Title
        focus={focus}
        handleFocusChange={handleFocusChange}
        title={title}
        handleTitleChange={handleTitleChange}
        isWritten={isWritten}
        handleIsWrittenChange={handleIsWrittenChange}
      />
      <Problem
        focus={focus}
        handleFocusChange={handleFocusChange}
        problem={problem}
        handleProblemChange={handleProblemChange}
        isWritten={isWritten}
        handleIsWrittenChange={handleIsWrittenChange}
      />
      <Expect
        focus={focus}
        handleFocusChange={handleFocusChange}
        expect={expect}
        handleExpectChange={handleExpectChange}
        isWritten={isWritten}
        handleIsWrittenChange={handleIsWrittenChange}
      />
      <Tags
        focus={focus}
        handleFocusChange={handleFocusChange}
        tags={tags}
        handleTagsChange={handleTagsChange}
        isWritten={isWritten}
        handleIsWrittenChange={handleIsWrittenChange}
      />
      <StyledDiv>
        <StyledBlueBtn
          className={focus !== "Done" ? "disabledBtn" : ""}
          onClick={handleBlueBtnClick}
        >
          Review your question
        </StyledBlueBtn>
        <StyledTransRedBtn
          className={title.length < 15 ? "disabledBtn" : ""}
          onClick={handleTransRedBtnClick}
        >
          Discard draft
        </StyledTransRedBtn>
      </StyledDiv>
    </main>
  );
}

export default Ask;
