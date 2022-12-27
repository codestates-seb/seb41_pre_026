import styled from "styled-components";
import Header from "../Components/Ask/Header";
import Title from "../Components/Ask/Title";
import Problem from "../Components/Ask/Problem";
import Expect from "../Components/Ask/Expect";
import Tags from "../Components/Ask/Tags";
import { StyledBlueBtn, StyledTransRedBtn } from "../Components/Share/Button";
import { useState } from "react";

const StyledDiv = styled.div`
  button:nth-child(2) {
    margin: 0px 0px 0px 16px;
  }
`;

function Ask() {
  const [focus, setFocus] = useState("Title");

  console.log(focus);

  const handleFocusChange = (focus) => {
    setFocus(focus);
  };

  return (
    <main>
      <Header focus={focus} handleFocusChange={handleFocusChange} />
      <Title focus={focus} handleFocusChange={handleFocusChange} />
      <Problem focus={focus} handleFocusChange={handleFocusChange} />
      <Expect focus={focus} handleFocusChange={handleFocusChange} />
      <Tags focus={focus} handleFocusChange={handleFocusChange} />
      <StyledDiv>
        <StyledBlueBtn>Review your question</StyledBlueBtn>
        <StyledTransRedBtn>Discard draft</StyledTransRedBtn>
      </StyledDiv>
    </main>
  );
}

export default Ask;
