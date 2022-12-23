import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 580px;
  height: 120px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 571px;
  height: 51px;
  margin: 12px 0px;
  display: flex;
  flex-direction: row;
`;

const AllQuestions = styled.h1`
  color: #232629;
  width: 456px;
  height: 38px;
  font-size: 27px;
  margin: 0px 12px 12px 0px;
  font-weight: 400;
  line-height: 35.1px;
`;

const AskBtn = styled.button`
  color: #ffffff;
  width: 103px;
  height: 38px;
  font-size: 13px;
  background-color: #0a95ff;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  padding: 10.4px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  border-color: #0a95ff;
  border-radius: 2px;
`;

const QuestionTotal = styled.div`
  color: #232629;
  display: block;
  font-size: 17px;
  flex: 1 auto;
  line-height: 22px;
  font-weight: 400;
`;

const NewestSort = styled.button`
  width: 63px;
  height: 35px;
  background-color: #ffffff;
  color: rgb(59, 64, 69);
  border: 1px solid;
  border-color: hsl(210, 8%, 55%);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: -1px;
  margin-right: -1px;
  padding: 9.6px;
  position: relative;
`;

const UnansweredSort = styled.button`
  width: 94px;
  height: 35px;
  background-color: #ffffff;
  color: rgb(59, 64, 69);
  border: 1px solid;
  border-color: hsl(210, 8%, 55%);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: -1px;
  margin-right: -1px;
  padding: 9.6px;
  position: relative;
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledDiv>
        <AllQuestions>All Questions</AllQuestions>
        <AskBtn>Ask Question</AskBtn>
      </StyledDiv>
      <StyledDiv>
        <QuestionTotal>23,350,032 questions</QuestionTotal>
        <div>
          <NewestSort>Newest</NewestSort>
          <UnansweredSort>Unanswered</UnansweredSort>
        </div>
      </StyledDiv>
    </HeaderContainer>
  );
}

export default Header;
