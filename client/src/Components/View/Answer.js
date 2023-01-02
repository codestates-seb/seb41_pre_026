import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Vote from "./Vote";
import Editor from "../Share/Editor";
import setDateFormat from "../../util/setDateFormat";
import Cookie from "../../util/cookie";

const AnswerContainer = styled.div`
  border-bottom: 1px solid #dadbdc;
  box-sizing: border-box;
  display: block;
  margin-top: 10px;
  padding-top: 10px;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .answer-content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 52px 675px;
    text-align: left;
    vertical-align: baseline;
    .answer-content-vote {
      display: block;
      margin-top: 8px;
      padding-right: 16px;
      vertical-align: top;
    }
    .answer-content-post {
      display: block;
      padding: 0px 16px;
      vertical-align: top;
    }
  }
  .answer-footer {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    margin: 16px 0px;
    padding-top: 4px;
    .menu {
      display: flex;
      flex-wrap: wrap;
      font-size: 13px;
      color: #6a737c;
      div {
        display: block;
        padding: 4px;
        margin-right: 4px;
      }
      a {
        text-decoration: none;
        color: #6a737c;
      }
    }
    .profile {
      background-color: #d9eaf7;
      align-items: flex-start;
      display: flex;
      felx-wrap: wrap;
      font-size: 13px;
      justify-content: flex-end;
      text-align: left;
      vertical-align: baseline;
      margin-left: auto;
      padding: 4px;
      border-radius: 3px;
      img {
        width: 22px;
        height: 22px;
        border-radius: 2px;
        margin: 1px;
      }
      span {
        margin: 2px;
        font-size: 12px;
        color: #6a737c;
      }
    }
`;

function Answer({ answerData, isLogin, data }) {
  const [content, setContent] = useState(answerData.answerContent);
  const cookie = new Cookie();
  const score = answerData.score;
  const vote = answerData.vote;
  const subject = "answers";
  const aid = answerData.answerId;

  return (
    <AnswerContainer>
      <div className="answer-content">
        <div className="answer-content-vote">
          <Vote score={score} vote={vote} subject={subject} aid={aid} />
        </div>
        <div className="answer-content-post">
          <Editor value={content} setValue={setContent} />
          <div className="answer-footer">
            <div className="menu">
              <div>
                <Link to="/question" className="none">
                  Share
                </Link>
              </div>
              {isLogin &&
              Number(cookie.get("userId")) === answerData.memberId ? (
                <div>
                  <Link to="/edit" state={{ data: [aid, "answers", data.id] }}>
                    Edit
                  </Link>
                </div>
              ) : null}
              <div>
                <Link to="/question" className="none">
                  Follow
                </Link>
              </div>
            </div>
            <div className="profile">
              <img src={answerData.profile} alt=""></img>
              <span>{answerData.name}</span>
              <span>
                answerd{" "}
                {answerData.createdAt
                  ? setDateFormat(answerData.createdAt)
                  : answerData.createdAt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnswerContainer>
  );
}

export default Answer;
