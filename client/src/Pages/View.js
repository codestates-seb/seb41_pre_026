import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import RightSideBar from "../Components/Share/RightSideBar";
import { StyledBlueBtn } from "../Components/Share/Button";
import Vote from "../Components/View/Vote";
import Post from "../Components/View/Post";
import Answer from "../Components/View/Answer";
import EditAnswer from "../Components/View/EditAnswer";
import setDateFormat from "../util/setDateFormat";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1035px;
  background-color: #ffffff;
  padding: 20px 0px 0px 20px;
  display: block;
  .none {
    pointer-events: none;
  }
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .question-title {
      display: block;
      margin-bottom: 8px;
    }
    p {
      color: #3b4045;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.5;
      line-break: auto;
    }
    .button-container {
      margin: 0px 0px 0px 12px;
      button {
        width: 103.25px;
        height: 38px;
      }
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #ffffff;
      position: relative;
    }
  }
  .question-info {
    border-bottom: 1px solid #dadbdc;
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
    grid-template-columns: 52px 647px;
    text-align: left;
    vertical-align: baseline;
    margin: 20px 0px 0px 0px;

    .question-content-vote {
      display: block;
      margin-top: 8px;
      padding-right: 16px;
    }

    .question-content-post {
      display: block;
      padding: 0px 16px;
      vertical-align: top;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 70px 0px;
  }

  .contents {
    width: 700px;
  }
`;

const AnswerListContainer = styled.div`
  border-top: 1px solid #dadbdc;
  box-sizing: border-box;
  display: block;
  text-align: left;
  vertical-align: baseline;
  width: 700px;
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

function View({ isLogin }) {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [member, setMember] = useState([]);
  const [change, setChange] = useState(false);
  const score = data.score;
  const vote = data.vote;
  const subject = "questions";

  const navigate = useNavigate();
  const [qid, mid] = useLocation().state.id;

  useEffect(() => {
    axios({
      method: "get",
      url: `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/questions/${qid}`,
    }).then((res) => {
      setData(res.data.data);
      setAnswers(res.data.data.answers);
    });

    axios({
      method: "get",
      url: `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${mid}`,
      data: { memberId: mid },
    }).then((res) => {
      setMember(res.data.data);
    });
  }, [change, qid, mid]);

  const handleClick = () => {
    navigate("/ask");
  };

  const handleChange = () => setChange(!change);

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
          <span className="question-info-data">
            {data.created ? setDateFormat(data.created) : data.created}
          </span>
        </div>
        <div>
          <span className="question-info-description">Modified </span>
          <span className="question-info-data">
            {data.modified ? setDateFormat(data.modified) : data.modified}
          </span>
        </div>
        <div>
          <span className="question-info-description">Viewed </span>
          <span className="question-info-data">{data.view} times</span>
        </div>
      </div>
      <div className="flex">
        <div className="contents">
          <div className="question-content">
            <div className="question-content-vote">
              <Vote
                score={score}
                vote={vote}
                subject={subject}
                qid={qid}
                handleChange={handleChange}
              />
            </div>
            <div className="question-content-post">
              <Post data={data} member={member} isLogin={isLogin} />
            </div>
          </div>
          <AnswerListContainer>
            <div className="answers-header">
              <span>{data.answerCount}</span>
              <span>{data.answerCount === 1 ? "Answer" : "Answers"}</span>
            </div>
            {answers
              ? answers.map((answerData, idx) => (
                  <Answer
                    key={idx}
                    data={data}
                    answerData={answerData}
                    isLogin={isLogin}
                    handleChange={handleChange}
                  />
                ))
              : null}
          </AnswerListContainer>
          <EditAnswer handleChange={handleChange} qid={qid} />
        </div>
        <RightSideBar />
      </div>
    </Container>
  );
}
export default View;
