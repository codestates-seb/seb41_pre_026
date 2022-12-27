import styled from "styled-components";
import Help from "./Help";
import { StyledBlueBtn } from "../Share/Button";

const StyledTitleContainer = styled.div`
  display: flex;
  margin: 10px 0px;

  div:nth-child(1) {
    height: auto;
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
  }

  button {
    width: 50px;
    height: 38px;
    margin: 8px 0px 0px 0px;
  }
`;

function Problem() {
  return (
    <StyledTitleContainer>
      <div>
        <StyledWrapper>
          <label htmlFor="problem">What are the details of your problem?</label>
          <label htmlFor="problem">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </label>
          <textarea></textarea>
          <StyledBlueBtn>Next</StyledBlueBtn>
        </StyledWrapper>
      </div>
      <div>
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
