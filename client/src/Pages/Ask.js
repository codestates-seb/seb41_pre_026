import styled from "styled-components";
import axios from "axios";
import Header from "../Components/Ask/Header";
import Title from "../Components/Ask/Title";
import Problem from "../Components/Ask/Problem";
import Expect from "../Components/Ask/Expect";
import Tags from "../Components/Ask/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";
import { useState, useRef } from "react";
import Cookie from "../util/cookie";
import { Navigate } from "react-router-dom";

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
    pointer-events: none;
  }
`;

const StyledMain = styled.main`
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

function Ask() {
  const [isFocus, setIsFocus] = useState(undefined);
  const [isWritten, setIsWritten] = useState([]);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [expect, setExpect] = useState("");
  const [tags, setTags] = useState([]);
  const cookie = new Cookie();
  const compRef = useRef([]);

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
        ref = compRef.current[2].textarea;
        break;
      case 3:
        ref = compRef.current[3];
        break;
      case 4:
        ref = compRef.current[4];
        break;
      default:
        break;
    }

    ref.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      ref.focus();
    }, 200);
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
          mid: cookie.get("userId"),
          problem: problem,
          expecting: expect,
          title: title,
          tags: tags.join(" "),
        }
      )
      .then((res) => {
        Navigate({ to: "/question", state: { id: res.data.data.id } });
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReset = () => {
    setTitle("");
    setProblem("");
    setExpect("");
    setTags(undefined);
    handleIsFocus(0);
    setIsWritten([]);
  };

  return (
    <StyledMain>
      <Header />
      <div>
        <Title
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          title={title}
          handleTitle={handleTitle}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div
        className={
          isFocus !== 1 && !isWritten.find((el) => el === "Problem")
            ? "disabledDiv"
            : ""
        }
      >
        <Problem
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          problem={problem}
          handleProblem={handleProblem}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div
        className={
          isFocus !== 2 && !isWritten.find((el) => el === "Expect")
            ? "disabledDiv"
            : ""
        }
      >
        <Expect
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          expect={expect}
          handleExpect={handleExpect}
          handleIsWritten={handleIsWritten}
          compRef={compRef}
        />
      </div>
      <div
        className={
          isFocus !== 3 && !isWritten.find((el) => el === "Tags")
            ? "disabledDiv"
            : ""
        }
      >
        <Tags
          isFocus={isFocus}
          handleIsFocus={handleIsFocus}
          tags={tags}
          handleTags={handleTags}
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
    </StyledMain>
  );
}

export default Ask;
