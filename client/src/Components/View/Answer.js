import styled from "styled-components";
import Vote from "./Vote";
import profile2 from "../../Assets/proimg2.jpg";

const AnswerContainer = styled.div`
  border-top: 1px solid #e3e6e8;
  box-sizing: border-box;
  display: block;
  margin-top: 20px;
  padding-top: 10px;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .answers-header {
    p {
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
        <div className="answer-content-post">
          <p>
            Some model objects in R require native serialization methods to be
            saved and reloaded from file—h2o objects (and thus the tidymodels
            objects that wrap them) are an example of one that does. The
            tidymodels and vetiver teams at Posit recently collaborated on a
            package, bundle, that provides a consistent interface to native
            serialization methods. The docs on h2o are here.
          </p>
          <div className="answer-footer">
            <div className="menu">
              <div>
                <a href="/">Share</a>
              </div>
              <div>
                <a href="/">Follow</a>
              </div>
            </div>
            <div className="profile">
              <img src={profile2} alt=""></img>
              <span>lmimoh</span>
              <span>answerd 2022-12-27 10:48:06</span>
            </div>
          </div>
        </div>
      </div>
    </AnswerContainer>
  );
}

export default Answer;
