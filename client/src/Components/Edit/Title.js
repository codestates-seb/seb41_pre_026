import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";

const StyledTitleContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;

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
  height: 171px;
  background-color: #ffffff;
  margin: 0px 0px 6px 0px;
  padding: 24px;
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

  input {
    width: 100%;
    font-size: 13px;
    border: 1px solid #babfc3;
    border-radius: 3px;
    padding: 7.8px 9.1px;
  }

  input:focus {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }

  button {
    width: 50px;
    height: 38px;
    margin: 8px 0px 0px 0px;
  }
`;

function Title({
  isFocus,
  handleIsFocus,
  title,
  handleTitle,
  handleIsWritten,
  compRef,
}) {
  const handleOnFocus = () => {
    handleIsFocus(0);
  };

  const handleOnChange = (event) => {
    handleTitle(event.target.value);
  };

  const handleBtnClick = () => {
    handleIsFocus(1);
    handleIsWritten("Title");
  };

  return (
    <StyledTitleContainer>
      <StyledWrapper className={isFocus === 0 ? "border" : ""}>
        <label htmlFor="title">Title</label>
        <label htmlFor="title">
          Be specific and imagine you’re asking a question to another person.
        </label>
        <input
          ref={(el) => (compRef.current[0] = el)}
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          onFocus={handleOnFocus}
          onChange={handleOnChange}
          value={title}
        ></input>
        {isFocus === 0 && title.length >= 20 ? (
          <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
        ) : null}
      </StyledWrapper>
    </StyledTitleContainer>
  );
}

export default Title;
