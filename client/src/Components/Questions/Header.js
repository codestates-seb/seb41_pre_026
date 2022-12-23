import styled from "styled-components";

const StyledHeader = styled.header`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 0px 20px;
`;

const StyledH1 = styled.h1`
  color: #232629;
  width: 456px;
  height: 38px;
  font-size: 32px;
  margin: 0px 12px 12px 0px;
  font-weight: 400;
  line-height: 35.1px;
`;

const StyledBtn = styled.button`
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

const StyledSpan = styled.span`
  height: 100%;
  color: #232629;
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
`;

const StyledBtnDiv = styled.div`
  button {
    height: 35px;
    border: 1px solid #838c95;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    color: rgb(59, 64, 69);
  }

  button:first-child {
    border-right: 0px #838c95;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  button:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledH1>All Questions</StyledH1>
        <StyledBtn>Ask Question</StyledBtn>
      </StyledDiv>
      <StyledDiv>
        <StyledSpan>23,350,032 questions</StyledSpan>
        <StyledBtnDiv>
          <button>Newest</button>
          <button>Unanswered</button>
        </StyledBtnDiv>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
