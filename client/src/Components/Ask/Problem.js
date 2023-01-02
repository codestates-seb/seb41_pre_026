import styled from "styled-components";
import Help from "./Help";
import MDEditor from "@uiw/react-md-editor";
import { StyledBlueBtn } from "../Share/Button";
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
  width: 850px;
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

function Problem({
  isFocus,
  handleIsFocus,
  problem,
  handleProblem,
  handleIsWritten,
  compRef,
}) {
  useEffect(() => {
    setTimeout(() => {
      compRef.current[1].textarea.onfocus = () => {
        handleIsFocus(1);
      };
    }, 1);
  }, []);

  const handleOnChange = (value) => {
    handleProblem(value);
    handleIsWritten("Problem");
  };

  const handleBtnClick = () => {
    handleIsFocus(2);
  };

  return (
    <StyledTitleContainer>
      <div>
        <StyledWrapper>
          <label htmlFor="problem">What are the details of your problem?</label>
          <label htmlFor="problem">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </label>
          <MDEditor
            className={isFocus === 1 ? "active" : ""}
            value={problem}
            onChange={handleOnChange}
            preview={"edit"}
            ref={(el) => (compRef.current[1] = el)}
          />
          {problem.length > 20 && isFocus === 1 ? (
            <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
          ) : null}
        </StyledWrapper>
      </div>
      <div className={isFocus === 1 ? "visible" : "invisible"}>
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
