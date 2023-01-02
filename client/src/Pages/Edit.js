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
import { useLocation, useNavigate } from "react-router-dom";

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
  width: 722px;
  padding: 20px 0px 0px 20px;

  .border {
    border: 1px solid #e4e6e8;
  }

  .disabledDiv {
    cursor: not-allowed;
    opacity: 0.3;

    .wmde-markdown-var {
      pointer-events: none;
    }
  }
`;

function Edit() {
  const [isFocus, setIsFocus] = useState(0);
  const [isWritten, setIsWritten] = useState([]);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [expect, setExpect] = useState("");
  const [tags, setTags] = useState("");
  const [prevTags, setPrevTags] = useState([]);
  const cookie = new Cookie();
  const compRef = useRef([]);
  const [id, type, origin] = useLocation().state.data;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/${type}/${id}`
      )
      .then((res) => {
        if (type === "questions") {
          setTitle(res.data.data.title);
          setProblem(res.data.data.problem);
          setExpect(res.data.data.expecting);
          setPrevTags(res.data.data.tags.split(" "));
          setTags(res.data.data.tags);
        } else setProblem(res.data.data.answerContent);
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

  const handleSubmit = () => {
    const data =
      type === "questions"
        ? {
            mid: Number(cookie.get("userId")),
            problem: problem,
            expecting: expect,
            title: title,
            tags: tags,
          }
        : {
            answerId: id,
            answerContent: problem,
          };

    axios
      .patch(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/${type}/${id}`,
        data
      )
      .then((res) => {
        console.log(id);
        if (type === "questions") navigate("/question", { state: { qid: id } });
        else navigate("/question", { state: { qid: origin } });
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
      {type === "questions" ? (
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
          type={type}
        />
      </div>
      {type === "questions" ? (
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
      ) : null}
      {type === "questions" ? (
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
