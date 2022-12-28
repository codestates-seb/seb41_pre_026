import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e3e6e8;
  padding: 16px;
`;

const SummaryStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 25%;
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
    }
  }

  .content-item-profile {
    margin: 0px 0px 0px auto;
    font-size: 12px;
    color: #6a737c;
  }
`;

function Question({ question, id }) {
  return (
    <QuestionContainer>
      <SummaryStats>
        <div className="stats-item-vote">
          <span>{question.vote} </span>
          <span>{question.vote === 1 ? "vote" : "votes"}</span>
        </div>
        <div
          className={
            question.isAdopted
              ? "stats-item-answer-adopted"
              : "stats-item-answer"
          }
        >
          <span>{question.answerCount} </span>
          <span>{question.answerCount === 1 ? "answer" : "answers"}</span>
        </div>
        <div>
          <span>{question.view} </span>
          <span>{question.view === 1 ? "view" : "views"}</span>
        </div>
      </SummaryStats>
      <SummaryContent key={question.id}>
        <a href="/">{question.title}</a>
        <div>{question.excerpt}</div>
        <Info>
          <div className="content-item-tags">
            <ul>
              {question.tags.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="content-item-profile">
            <span>{question.mid}</span>
            <span>asked {question.createdAt}</span>
          </div>
        </Info>
      </SummaryContent>
    </QuestionContainer>
  );
}

export default Question;
