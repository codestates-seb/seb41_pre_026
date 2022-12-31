// import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const VoteContainer = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background-color: #ffffff;
    border: 0px;
    display: block;
    margin: 2px;
  }

  div {
    color: #6a737c;
    font-size: 21px;
    text-align: center;
  }

  .arrow-up {
    aria-hidden: true;
    width: 36px;
    height: 36px;
    viewbox: 0 0 36 36;
    path {
      cursor: pointer;
      color: #babfc4;
      fill: #babfc4;
      d: path("M 2 25 h 34 L 18 9 2 25 Z");
    }
  }
  .arrow-down {
    aria-hidden: true;
    width: 36px;
    height: 36px;
    viewbox: 0 0 36 36;
    path {
      cursor: pointer;
      color: #babfc4;
      fill: #babfc4;
      d: path("M 2 11 h 32 L 18 27 2 11 Z");
    }
  }
`;

function Vote({ score, vote, subject, qid, aid }) {
  // const [isUpClicked, setIsUpClicked] = useState(vote);
  // const [isDownClicked, setIsDownClicked] = useState(null);
  // let method = "";

  // if (vote === null) {
  //   method = "post";
  // } else {
  //   method = "patch";
  // }

  const handleClickUp = () => {
    // isUpClicked === "u" ? setIsUpClicked(null) : setIsUpClicked("u");

    axios({
      method: `post`, // `${method}`
      url: `http://43.200.68.32:8080/${subject}/upVote/${
        subject === "questions" ? qid : aid
      }`,
    }).then((res) => {
      console.log(res.data);
      window.location.replace(`/question/${qid}`);
    });
  };

  const handleClickDown = () => {
    // isDownClicked === "d" ? setIsDownClicked(null) : setIsDownClicked("d");

    axios({
      method: "patch", //`${method}`
      url: `http://43.200.68.32:8080/${subject}/downVote/${
        subject === "questions" ? qid : aid
      }`,
    }).then((res) => {
      console.log(res.data);
      window.location.replace(`/question/${qid}`);
    });
  };

  return (
    <VoteContainer>
      <button onClick={handleClickUp}>
        <svg className="arrow-up">
          <path />
        </svg>
      </button>
      <div>
        <span>{score}</span>
      </div>
      <button onClick={handleClickDown}>
        <svg className="arrow-down">
          <path />
        </svg>
      </button>
    </VoteContainer>
  );
}
export default Vote;
