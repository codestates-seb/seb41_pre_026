import styled from "styled-components";
import Header from "../Components/Ask/Header";
import Title from "../Components/Ask/Title";
import Problem from "../Components/Ask/Problem";
import Expect from "../Components/Ask/Expect";
import Tags from "../Components/Ask/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";

const StyledDiv = styled.div`
  button:nth-child(2) {
    margin: 0px 0px 0px 16px;
  }
`;

function Ask() {
  return (
    <main>
      <Header />
      <Title />
      <Problem />
      <Expect />
      <Tags />
      <StyledDiv>
        <StyledBlueBtn>Review your question</StyledBlueBtn>
        <StyledTransRedBtn>Discard draft</StyledTransRedBtn>
      </StyledDiv>
    </main>
  );
}

export default Ask;
