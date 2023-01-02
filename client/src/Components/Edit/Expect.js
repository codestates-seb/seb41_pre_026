import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import MDEditor from "@uiw/react-md-editor";
import { useEffect } from "react";

const StyledTitleContainer = styled.div`
  display: flex;
  margin: 10px 0px;

  div:nth-child(1) {
    height: auto;
  }

  .invisible {
    display: none;
  }

  .visible {
    display: "";
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin: 0px 0px 6px 0px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;
  color: #232629;
  display: flex;
  flex-direction: column;

  label:nth-child(1) {
    color: #0c0d02;
    font-size: 15px;
    font-weight: 600;
  }

  label:nth-child(2) {
    color: #3b4045;
    font-size: 12px;
    margin: 0px 0px 4px 0px;
  }

  button {
    width: 50px;
    height: 38px;
    margin: 8px 0px 0px 0px;
  }

  .active {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }
`;

function Expect({
  isFocus,
  handleIsFocus,
  expect,
  handleExpect,
  isWritten,
  handleIsWritten,
  compRef,
}) {
  useEffect(() => {
    setTimeout(() => {
      compRef.current[2].textarea.onfocus = () => {
        handleOnFocus();
      };
    }, 1);
  }, []);

  const handleOnFocus = () => {
    handleIsFocus(2);
  };

  const handleOnChange = (value) => {
    handleExpect(value);
    handleIsWritten("Expect");
  };

  const handleBtnClick = () => {
    handleIsFocus(3);
  };

  return (
    <StyledTitleContainer
      className={
        isFocus !== 2 && !isWritten.find((el) => el === "Expect")
          ? "disabledDiv"
          : ""
      }
    >
      <StyledWrapper>
        <label htmlFor="Expect">
          What did you try and what were you expecting?
        </label>
        <label htmlFor="Expect">
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </label>
        <MDEditor
          className={isFocus === 2 ? "active" : ""}
          value={expect}
          onChange={handleOnChange}
          preview={"edit"}
          ref={(el) => (compRef.current[2] = el)}
        />
        {expect.length > 20 && isFocus === 2 ? (
          <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
        ) : null}
      </StyledWrapper>
    </StyledTitleContainer>
  );
}

export default Expect;
