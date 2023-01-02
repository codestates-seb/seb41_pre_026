import styled from "styled-components";
import { Link } from "react-router-dom";

const QuestionContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e3e6e8;
  padding: 16px 24px 16px 16px;
`;

const SummaryStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 15%;
  font-size: 13px;
  color: #6a737c;
  gap: 6px;
  margin: 0px 15px 0px 0px;
  padding: 3px 0px 0px 0px;

  .stats-item-vote {
    color: #0c0d0e;
  }

  .stats-item-answer {
    color: #2f6f44;
    border: 0.5px solid #2f6f44;
    border-radius: 3px;
    padding: 2px 4px;
  }

  .stats-item-answer-adopted {
    color: #ffffff;
    background-color: #2f6f44;
    border: 0.5px solid #2f6f44;
    border-radius: 3px;
    padding: 2px 4px;
  }
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
  color: #545b5d;
  width: 85%;

  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  a {
    text-decoration: none;
    font-size: 17px;
    color: #0074cc;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px !important;

  .content-item-tags {
    display: flex;

    ul {
      flex-direction: row;
      float: left;
      margin: 0px 0px 3px 0px;
      padding: 0px;
    }

    li {
      list-style: none !important;
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      color: #39739d;
      background-color: #e1ecf4;
      padding: 4px 6px;
      margin: 0px 5px 0px 5px;
    }
  }

  .content-item-profile {
    margin: 0px 0px 0px auto;
    font-size: 12px;
    color: #6a737c;
  }
`;

function Question({ question }) {
  const tags = ["tag1", "tag2", "tag3", "tag4", "tag5"];
  return (
    <QuestionContainer>
      <SummaryStats>
        <div className="stats-item-vote">
          <span>{0} </span>
          <span>{question.vote < 2 ? "vote" : "votes"}</span>
        </div>
        <div
          className={
            question.isAdopted
              ? "stats-item-answer-adopted"
              : "stats-item-answer"
          }
        >
          <span>{question.answerCount} </span>
          <span>{question.answerCount < 2 ? "answer" : "answers"}</span>
        </div>
        <div>
          <span>{question.view} </span>
          <span>{question.view < 2 ? "view" : "views"}</span>
        </div>
      </SummaryStats>
      <SummaryContent>
        <Link to={"/question"} state={{ id: question.questionId }}>
          {question.title}
        </Link>
        <div className="content">{question.problem}</div>
        <Info>
          <div className="content-item-tags">
            <ul>
              {tags.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="content-item-profile">
            <span>{question.mid} | </span>
            <span>asked {question.createdAt}</span>
          </div>
        </Info>
      </SummaryContent>
    </QuestionContainer>
  );
}

export default Question;
