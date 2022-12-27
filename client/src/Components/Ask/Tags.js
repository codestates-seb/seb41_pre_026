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

  input {
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

function Tags({
  focus,
  handleFocusChange,
  tags,
  handleTagsChange,
  isWritten,
  handleIsWrittenChange,
}) {
  const handleFocus = () => {
    handleFocusChange("Tags");
  };

  const handleOnChange = (event) => {
    handleTagsChange(event.target.value);
  };

  const handleBtnClick = () => {
    handleIsWrittenChange("Tags");
  };
  return (
    <StyledTitleContainer>
      <div
        className={
          focus === "Tags" || isWritten.find((el) => el === "Tags")
            ? null
            : "disabledDiv"
        }
      >
        <StyledWrapper>
          <label htmlFor="tags">Tags</label>
          <label htmlFor="tags">
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </label>
          <input
            placeholder="e.g. (Angular database swift)"
            onFocus={handleFocus}
            onChange={handleOnChange}
            value={tags}
            disabled={focus !== "Tags" ? "disabled" : ""}
          ></input>
          {tags.length > 1 ? (
            <StyledBlueBtn onClick={handleBtnClick}>Next</StyledBlueBtn>
          ) : null}
        </StyledWrapper>
      </div>
      <div className={focus === "Tags" ? "visible" : "invisible"}>
        <Help
          title={"Adding tags"}
          content={
            "Tags help ensure that your question will get attention from the right people.\n\nTag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.\n\nLearn more about tagging"
          }
        ></Help>
      </div>
    </StyledTitleContainer>
  );
}

export default Tags;
