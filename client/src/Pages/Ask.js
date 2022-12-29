import styled from "styled-components";
import axios from "axios";
import Header from "../Components/Ask/Header";
import Title from "../Components/Ask/Title";
import Problem from "../Components/Ask/Problem";
import Expect from "../Components/Ask/Expect";
import Tags from "../Components/Ask/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";
import { useEffect, useState, useRef } from "react";

const StyledDiv = styled.div`
  margin: 0px 0px 100px 0px;

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
  const [isFocus, setIsFocus] = useState(0);
  const [isWritten, setIsWritten] = useState([]);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [expect, setExpect] = useState("");
  const [tags, setTags] = useState([]);

  const compRef = useRef([]);

  useEffect(() => {
    if (isFocus > 0) {
      compRef.current[isFocus].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setTimeout(() => {
      compRef.current[isFocus].focus();
    }, 200);
  }, [isFocus]);

  const handleIsFocus = (isFocus) => {
    setIsFocus(isFocus);
  };

  const handleIsWritten = (el) => {
    setIsWritten([...isWritten, el]);
  };

  const handleTitle = (title) => {
    setTitle(title);
  };

  const handleProblem = (problem) => {
    setProblem(problem);
  };

  const handleExpect = (expect) => {
    setExpect(expect);
  };

  const handleTags = (tag) => {
    setTags(tag);
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/questions",
        {
          mid: 1,
          problem: problem,
          expecting: expect,
          title: title,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReset = () => {
    setTitle("");
    setProblem("");
    setExpect("");
    setTags([]);
    setIsFocus(0);
    setIsWritten([]);
  };

  return (
    <main>
      <Header isFocus={isFocus} handleIsFocus={handleIsFocus} />
      <div>
        <Title
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          title={title}
          handleTitle={handleTitle}
          isWritten={isWritten}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div>
        <Problem
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          problem={problem}
          handleProblem={handleProblem}
          isWritten={isWritten}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div>
        <Expect
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          expect={expect}
          handleExpect={handleExpect}
          isWritten={isWritten}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div>
        <Tags
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          tags={tags}
          handleTags={handleTags}
          isWritten={isWritten}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <StyledDiv ref={(el) => (compRef.current[4] = el)}>
        <StyledBlueBtn
          className={isFocus !== 4 ? "disabledBtn" : ""}
          onClick={handleSubmit}
        >
          Review your question
        </StyledBlueBtn>
        <StyledTransRedBtn
          className={title.length < 15 ? "disabledBtn" : ""}
          onClick={handleReset}
        >
          Discard draft
        </StyledTransRedBtn>
      </StyledDiv>
    </main>
  );
}

export default Ask;
