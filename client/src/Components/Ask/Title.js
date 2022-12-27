import styled from "styled-components";
import Help from "./Help";

const StyledTitleContainer = styled.div`
  display: flex;
`;

const StyledWrapper = styled.div`
  width: 790px;
  height: 85px;
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
`;

function Title() {
  return (
    <StyledTitleContainer>
      <StyledWrapper>
        <label htmlFor="title">Title</label>
        <label htmlFor="title">
          Be specific and imagine you’re asking a question to another person.
        </label>
        <input></input>
      </StyledWrapper>
      <Help
        title={"Writing a good title"}
        content={
          "Your title should summarize the problem.\n\nYou might find that you have a better idea of your title after writing out the rest of the question."
        }
      ></Help>
    </StyledTitleContainer>
  );
}

export default Title;
