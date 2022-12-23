import styled from "styled-components";

const QuestionContainer = styled.div`
  position: relative;
  width: auto;
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  padding: 16px;
`;

const SummaryStats = styled.div`
  gap: 4px;
  margin-right: 16px;
  margin-bottom: 4px;
  width: 108px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  font-size: 13px;
  color: #6a737c;
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
  flex-grow: 1;
  max-width: 100%;
  a {
    text-decoration: none;
    font-size: 17px;
    color: #0074cc;
    cursor: pointer;
    user-select: auto;
  }
  div {
    margin-top: 1x;
    margin-bottom: 8px;
    fonst-size: 13px;
    color: #3b4045;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;

  .content-item-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  ul {
    margin: 4px 4px 0px 0px;
    padding: 0px;
    flex-direction: row;
    line-height: 18px;
    float: left;
  }
  li {
    list-style: none !important;
    display: inline-block;
    font-size: 12px;
    margin: 2px;
    padding: 4px 6px;
    border-radius: 3px;
    color: #39739d;
    background-color: #e1ecf4;
  }

  .content-item-profile {
    flex-wrap: wrap;
    margin-left: auto;
    justify-content: flex-end;
  }

  span {
    margin: 2px;
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