import styled from "styled-components";
import Help from "./Help";
import { StyledBlueBtn } from "../Share/Button";

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
  width: 790px;
  height: 171px;
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

  input {
    width: 760px;
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
  focus,
  handleFocusChange,
  title,
  handleTitleChange,
  isWritten,
  handleIsWrittenChange,
}) {
  const handleFocus = () => {
    handleFocusChange(0);
  };

  const handleOnChange = (event) => {
    handleTitleChange(event.target.value);
  };

  const handleBtnClick = () => {
    handleFocusChange(1);
    handleIsWrittenChange("Title");
  };

  return (
    <StyledTitleContainer>
      <div>
        <StyledWrapper>
          <label htmlFor="title">Title</label>
          <label htmlFor="title">
            Be specific and imagine you’re asking a question to another person.
          </label>
          <input
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            onFocus={handleFocus}
            onChange={handleOnChange}
            value={title}
          ></input>
          {focus === 0 && title.length >= 15 ? (
            <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
          ) : null}
        </StyledWrapper>
      </div>
      <div className={focus === 0 ? "visible" : "invisible"}>
        <Help
          title={"Writing a good title"}
          content={
            "Your title should summarize the problem.\n\nYou might find that you have a better idea of your title after writing out the rest of the question."
          }
        ></Help>
      </div>
    </StyledTitleContainer>
  );
}

export default Title;
