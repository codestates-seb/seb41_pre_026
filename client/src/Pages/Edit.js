import styled from "styled-components";
import axios from "axios";
import Header from "../Components/Edit/Header";
import Title from "../Components/Edit/Title";
import Problem from "../Components/Edit/Problem";
import Expect from "../Components/Edit/Expect";
import Tags from "../Components/Edit/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";
import { useState, useRef, useEffect } from "react";
import Cookie from "../util/cookie";
import { useLocation } from "react-router-dom";

const StyledDiv = styled.div`
  margin: 0px 0px 100px 24px;

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

const StylmedMain = styled.main`
  width: 809px;

  .border {
    border-bottom: 1px solid #e4e6e8;
  }

  .disabledDiv {
    cursor: not-allowed;
    opacity: 0.3;

    .wmde-markdown-var {
      pointer-events: none;
    }
  }
`;

function Edit({ type }) {
  const [isFocus, setIsFocus] = useState(0);
  const [isWritten, setIsWritten] = useState([]);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [expect, setExpect] = useState("");
  const [tags, setTags] = useState([]);
  const [prevTags, setPrevTags] = useState([]);
  const cookie = new Cookie();
  const compRef = useRef([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/questions/27"
      )
      .then((res) => {
        setTitle(res.data.data.title);
        setProblem(res.data.data.problem);
        setExpect(res.data.data.expecting);
        setPrevTags(res.data.data.tags.split(" "));
      })
      .catch((e) => console.log(e));
  }, []);

  const handleIsFocus = (isFocus) => {
    setIsFocus(isFocus);
    let ref;

    switch (isFocus) {
      case 0:
        ref = compRef.current[0];
        break;
      case 1:
        ref = compRef.current[1].textarea;
        break;
      case 2:
        ref = compRef.current[2];
        break;
      case 3:
        ref = compRef.current[3];
        break;
      default:
        break;
    }

    console.log(ref);
    ref.focus();
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

  const renderType = () => {
    return type === "q";
  };

  const handleSubmit = () => {
    axios
      .patch(
        "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/questions/27",
        {
          mid: cookie.get("userId"),
          problem: problem,
          expecting: expect,
          title: title,
          tags: tags,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
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
    <StylmedMain>
      <Header />
      {renderType ? (
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
      ) : null}
      {renderType ? (
        <div>
          <Problem
            isFocus={isFocus}
            handleIsFocus={handleIsFocus}
            problem={problem}
            handleProblem={handleProblem}
            isWritten={isWritten}
            handleIsWritten={handleIsWritten}
            compRef={compRef}
            setProblem={setProblem}
            setIsWritten={setIsWritten}
          />
        </div>
      ) : null}
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
      {renderType ? (
        <div>
          <Tags
            isFocus={isFocus}
            handleIsFocus={handleIsFocus}
            tags={tags}
            handleTags={handleTags}
            isWritten={isWritten}
            handleIsWritten={handleIsWritten}
            compRef={compRef}
            prevTags={prevTags}
          />
        </div>
      ) : null}
      <StyledDiv ref={(el) => (compRef.current[4] = el)}>
        <StyledBlueBtn onClick={handleSubmit}>
          Review your question
        </StyledBlueBtn>
        <StyledTransRedBtn onClick={handleReset}>
          Discard draft
        </StyledTransRedBtn>
      </StyledDiv>
    </StylmedMain>
  );
}

export default Edit;
