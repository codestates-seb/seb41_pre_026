import styled from "styled-components";
import { StyledBlueBtn } from "../Components/Share/Button";
import Vote from "../Components/View/Vote";
import Post from "../Components/View/Post";
import Answer from "../Components/View/Answer";

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

function View() {
  return (
    <Container>
      <div className="question-header">
        <div className="question title">
          <p>Close to end of the page, element needs to disappear</p>
        </div>
        <div className="button-container">
          <StyledBlueBtn>
            <a href="/">Ask Question</a>
          </StyledBlueBtn>
        </div>
      </div>
      <div className="question-info">
        <div>
          <span className="question-info-description">Asked </span>
          <span className="question-info-data">9 days ago</span>
        </div>
        <div>
          <span className="question-info-description">Modified </span>
          <span className="question-info-data">5 days ago</span>
        </div>
        <div>
          <span className="question-info-description">Viewed </span>
          <span className="question-info-data">92 times</span>
        </div>
      </div>
      <div className="question-content">
        <div className="question-content-vote">
          <Vote />
        </div>
        <div className="question-content-post">
          <Post />
        </div>
      </div>
      <Answer />
    </Container>
  );
}
export default View;
