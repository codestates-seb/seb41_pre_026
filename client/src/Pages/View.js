import styled from "styled-components";
import { StyledBlueBtn } from "../Components/Share/Button";
import Vote from "../Components/View/Vote";
import Post from "../Components/View/Post";
import Answer from "../Components/View/Answer";
import EditAnswer from "../Components/View/EditAnswer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: #ffffff;
  border-radius: 0;
  border: 1px solid #d6d9dc;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 60px;
  box-sizing: border-box;
  display: block;
  .question-header {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    text-align: left;
    justify-content: space-between;
    margin-bottom: 0px;
    padding: 0px;
    line-height: 17px;
    .question-title {
      display: block;
      margin-bottom: 8px;
    }
    p {
      color: #3b4045;
      font-size: 24px;
      font-weight: 400;
    }
    .button-container {
      margin: 0px 0px 0px 12px;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #ffffff;
      position: relative;
    }
  }
  .question-info {
    border-bottom: 1px solid #e3e6e8;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    margin-bottom: 16x;
    padding-bottom: 8px;
    text-align: left;
    vertical-align: baseline;
    align-items: flex-end;
    div {
      box-sizing: border-box;
      display: block;
      line-height: 17px;
      margin-bottom: 8px;
      margin-right: 16px;
      text-align: left;
      white-space: nowrap;
    }
    .question-info-description {
      color: #6a737c;
    }
    .question-info-data {
      color: #232629;
    }
  }
  .question-content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 52px 675px;
    text-align: left;
    vertical-align: baseline;
    .question-content-vote {
      display: block;
      margin-top: 8px;
      padding-right: 16px;
      vertical-align: top;
    }
    .question-content-post {
      display: block;
      padding: 0px 16px;
      vertical-align: top;
    }
  }
`;

const AnswerListContainer = styled.div`
  border-top: 1px solid #e3e6e8;
  box-sizing: border-box;
  display: block;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .answers-header {
    margin-top: 20px;
    padding-top: 10px;
    span {
      font-size: 19px;
      font-weight: 400;
      color: #232629;
      padding-right: 6px;
    }
  }
`;

function View() {
  const [data, setData] = useState({});
  const [answers, setAnswers] = useState([]);
  const score = data.score;

  const navigate = useNavigate();
  // const location = useLocation();

  const handleClick = () => {
    navigate("/ask");
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://43.200.68.32:8080/questions/3?mid=1",
    }).then((res) => {
      setData(res.data.data);
      setAnswers(res.data.data.answers);
    });
  }, []);

  return (
    <Container>
      <div className="question-header">
        <div className="question title">
          <p>{data.title}</p>
        </div>
        <div className="button-container">
          <StyledBlueBtn onClick={handleClick}>Ask Question</StyledBlueBtn>
        </div>
      </div>
      <div className="question-info">
        <div>
          <span className="question-info-description">Asked </span>
          <span className="question-info-data">{data.created}</span>
        </div>
        <div>
          <span className="question-info-description">Modified </span>
          <span className="question-info-data">{data.modified}</span>
        </div>
        <div>
          <span className="question-info-description">Viewed </span>
          <span className="question-info-data">{data.view} times</span>
        </div>
      </div>
      <div className="question-content">
        <div className="question-content-vote">
          <Vote score={score} />
        </div>
        <div className="question-content-post">
          <Post data={data} />
        </div>
      </div>
      <AnswerListContainer>
        <div className="answers-header">
          <span>{data.answerCount}</span>
          <span>{data.answerCount === 1 ? "Answer" : "Answers"}</span>
        </div>
        {answers
          ? answers.map((answerData, idx) => (
              <Answer key={idx} answerData={answerData} />
            ))
          : null}
      </AnswerListContainer>
      <EditAnswer />
    </Container>
  );
}
export default View;
