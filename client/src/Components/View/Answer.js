import styled from "styled-components";
import Vote from "./Vote";

const AnswerContainer = styled.div`
  border-top: 1px solid #e3e6e8;
  box-sizing: border-box;
  display: block;
  margin-top: 40px;
  padding-top: 10px;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .answers-header {
    p {
      margin-top: 8px;
      font-size: 19px;
      font-weight: 400;
      color: #232629;
    }
  }
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
`;
function Answer() {
  return (
    <AnswerContainer>
      <div className="answers-header">
        <p>4 answers</p>
      </div>
      <div className="answer-content">
        <div className="answer-content-vote">
          <Vote />
        </div>
        <div className="answer-content-post">answer 내용</div>
      </div>
    </AnswerContainer>
  );
}

export default Answer;
