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

  .disabledDiv {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const StyledWrapper = styled.div`
  width: 790px;
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

  textarea {
    width: 760px;
    font-size: 13px;
    border: 1px solid #babfc3;
    border-radius: 3px;
    padding: 7.8px 9.1px;
    outline-color: #0074cc;
  }

  textarea:focus {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }

  button {
    width: 50px;
    height: 38px;
    margin: 8px 0px 0px 0px;
  }
`;

function Problem({
  focus,
  handleFocusChange,
  problem,
  handleProblemChange,
  isWritten,
  handleIsWrittenChange,
}) {
  const handleFocus = () => {
    handleFocusChange(1);
  };

  const handleOnChange = (event) => {
    handleProblemChange(event.target.value);
    handleIsWrittenChange("Problem");
  };

  const handleBtnClick = () => {
    handleFocusChange(2);
  };

  return (
    <StyledTitleContainer>
      <div
        className={
          focus === 1 || isWritten.find((el) => el === "Problem")
            ? null
            : "disabledDiv"
        }
      >
        <StyledWrapper>
          <label htmlFor="problem">What are the details of your problem?</label>
          <label htmlFor="problem">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </label>
          <textarea
            onFocus={handleFocus}
            onChange={handleOnChange}
            value={problem}
            disabled={
              focus === 1 || isWritten.find((el) => el === "Problem")
                ? ""
                : "disabled"
            }
          ></textarea>
          {problem.length > 20 && focus === 1 ? (
            <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
          ) : null}
        </StyledWrapper>
      </div>
      <div className={focus === 1 ? "visible" : "invisible"}>
        <Help
          title={"Introduce the problem"}
          content={
            "Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself."
          }
        ></Help>
      </div>
    </StyledTitleContainer>
  );
}

export default Problem;
