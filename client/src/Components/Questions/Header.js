import styled from "styled-components";
import { useState } from "react";
import { StyledBlueBtn } from "../Share/Button";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%
  display: flex;
  flex-direction: column;
  padding: 20px 20px 15px 20px;
  border-bottom: 1px solid #dadbdc;

  .top {
    margin: 0px 0px 15px 0px;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 0px 0px;

  .ask {
    height: 38px;
    padding: 10px 10px 10px 10px;
    line-height: 12px;
  }
`;

const StyledH1 = styled.h1`
  color: #232629;
  width: 456px;
  height: 38px;
  font-size: 26px;
  margin: 0px 12px 12px 0px;
  font-weight: 400;
  line-height: 35.1px;
`;

const StyledSpan = styled.span`
  height: 100%;
  color: #232629;
  font-size: 18px;
  font-weight: 400;
`;

const StyledBtnDiv = styled.div`
  button {
    height: 35px;
    border: 1px solid #838c95;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    color: rgb(59, 64, 69);
    cursor: pointer;
    background-color: #ffffff;
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

  button:nth-of-type(${({ select }) => select}) {
    background-color: #e3e6e8;
  }
`;

function Header() {
  const [selecBtn, setSelecBtn] = useState(1);
  const navigate = useNavigate();

  const handleBtnColor = (e) => {
    setSelecBtn(e.target.id);
  };

  return (
    <StyledHeader>
      <StyledDiv className="top">
        <StyledH1>All Questions</StyledH1>
        <StyledBlueBtn className="ask" onClick={() => navigate("/ask")}>
          Ask Question
        </StyledBlueBtn>
      </StyledDiv>
      <StyledDiv>
        <StyledSpan>23,350,032 questions</StyledSpan>
        <StyledBtnDiv select={selecBtn}>
          <button id="1" onClick={handleBtnColor}>
            Newest
          </button>
          <button id="2" onClick={handleBtnColor}>
            Unanswered
          </button>
        </StyledBtnDiv>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
