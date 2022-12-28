import styled from "styled-components";
import Help from "./Help";
import { StyledBlueBtn } from "../Share/Button";
import { useState } from "react";

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

  button {
    width: 50px;
    height: 38px;
    margin: 8px 0px 0px 0px;
  }
`;

export const StyledTagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 760px;
  height: 33px;
  padding: 2px 9px 2px 2px;
  border: 1px solid #babfc3;
  border-radius: 3px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 4px 0 0 0;

    > .tag {
      width: auto;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #39739d;
      padding: 0 4px;
      font-size: 12px;
      list-style: none;
      border-radius: 3px;
      margin: 2px 3px 4px 2px;
      background: #e1ecf4;

      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        font-weight: 900;
        margin-left: 4px;
        color: #3a749d;
        border-radius: 30%;
        background: transparent;
        cursor: pointer;
      }

      > .tag-close-icon:hover {
        color: #ffffff;
        background: #39739d;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    font-size: 12px;
    padding: 4px 0 0 0;
    height: 25px;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
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
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFocus = () => {
    handleFocusChange("Tags");
  };

  const handleNextBtnClick = () => {
    handleIsWrittenChange("Tags");
    handleTagsChange(selectedTags);
    handleFocusChange("Done");
  };

  const removeTags = (indexToRemove) => {
    setSelectedTags(selectedTags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    let newTag = event.target.value.trim();
    const filtered = selectedTags.filter((el) => el === newTag);
    if (newTag !== "" && filtered.length === 0) {
      setSelectedTags([...selectedTags, newTag]);
      handleTagsChange(selectedTags);
      event.target.value = "";
    }
  };

  return (
    <StyledTitleContainer>
      <div
        className={
          focus === "Tags" ||
          isWritten.find((el) => el === "Tags") ||
          selectedTags.length > 0
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
          <StyledTagsInput>
            <ul id="tags">
              {selectedTags.map((tag, index) => (
                <li key={index} className="tag">
                  <span className="tag-title">{tag}</span>
                  <span
                    role="presentation"
                    className="tag-close-icon"
                    onClick={() => removeTags(index)}
                  >
                    &times;
                  </span>
                </li>
              ))}
            </ul>
            <input
              className="tag-input"
              type="text"
              onKeyUp={(event) =>
                event.key === "Enter" ? addTags(event) : null
              }
              placeholder="e.g. (Angular database swift)"
              onFocus={handleFocus}
              disabled={
                focus === "Tags" || isWritten.find((el) => el === "Tags")
                  ? null
                  : "disabled"
              }
            />
          </StyledTagsInput>
          <StyledBlueBtn onClick={handleNextBtnClick}>Next</StyledBlueBtn>
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
