import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 12px 0px;

  h1 {
    font-size: 27px;
    margin: 0px 0px 15px 0px;
    font-weight: 400;
    color: #232629;
  }

  p {
    overflow: auto;
    max-width: 630px;
    margin: 0px 0px 16px;
    font-size: 15px;
    color: #232629;
  }

  .allTag {
    margin: 2px 0px 24px 0px;

    a {
      color: #0074cc;
      font-size: 13px;
      text-decoration-line: none;
    }

    a:hover {
      color: #0b95ff;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .searchBar {
    border: 1px solid #babfc4;
    width: 190px;
    height: 37px;
    padding: 7.8px 9.1px 7.8px 6px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
  }

  .isFocused {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }

  svg {
    color: #838c95;
    margin: 2px 5px 0px 10px;
  }

  input {
    border: none;
    :focus {
      outline: none;
    }
  }

  input::placeholder {
    color: #cfd2d6;
  }
`;

const StyledBtnDiv = styled.div`
  button {
    height: 37px;
    border: 1px solid #838c95;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    color: rgb(59, 64, 69);
    cursor: pointer;
    background-color: #ffffff;
    padding: 10px;
  }

  button:nth-child(1) {
    border-right: 0px #838c95;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  button:nth-child(2) {
    border-right: 0px #838c95;
  }

  button:nth-child(3) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  button:nth-of-type(${({ select }) => select}) {
    background-color: #e3e6e8;
  }
`;

function Header({ search, handleSearch }) {
  const [isFocus, setIsFocus] = useState(false);
  const [selecBtn, setSelecBtn] = useState(1);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleBtnColor = (e) => {
    setSelecBtn(e.target.id);
  };

  const handleOnChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <StyledHeader>
      <div>
        <h1>Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
        <div className="allTag">
          <a href="https://stackoverflow.com/tags/synonyms">
            Show all tag synonyms
          </a>
        </div>
      </div>
      <StyledDiv>
        <div className={`searchBar ${isFocus ? "isFocused" : ""}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <input
            placeholder="Filter by tag name"
            value={search}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleOnChange}
          />
        </div>
        <StyledBtnDiv select={selecBtn}>
          <button id="1" onClick={handleBtnColor}>
            Popular
          </button>
          <button id="2" onClick={handleBtnColor}>
            Name
          </button>
          <button id="3" onClick={handleBtnColor}>
            New
          </button>
        </StyledBtnDiv>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
