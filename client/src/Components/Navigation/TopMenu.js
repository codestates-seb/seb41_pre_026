import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  visibility: ${({ isFold }) => (isFold ? "visible" : "hidden")};
  position: relative;
  top: -4px;
  left: -173px;
  width: 240px;
  height: 185px;
  background-color: white;
  border: 1px solid #e3e6e8;
  padding: 20px 0px 0px 0px;

  button {
    display : flex;
    align-items : center;
    width: 100%;
    height: 34px;
    border: 0px;
    margin: 0px;
    padding: 0px 0px 0px 10px;
    text-align: left;
    font-size: 12px;
    color: #676d73;
    line-height : 1.2;
    cursor : pointer;
  }

  button svg {
    fill : #838c95;
    margin-right : 5px;
  }

  button:hover {
    color : black;
    svg {
      fill : black;
    }
  }

  .home {
    border-right: 3px solid #f48225;
    font-weight : 600;
    color : black;
    margin : 0px 0px 20px 0px;
  }

  .tags {
    padding : 0px 0px 0px 34px;
  }

  p {
    font-size: 11px;
    color: #676d73;
    margin: 0px 0px 10px 0px; 
    padding 0px 0px 0px 10px;
  }
`;

function TopMenu({ handleFold, isFold, handleOnside }) {
  const navigate = useNavigate();
  return (
    <StyledMenu isFold={isFold}>
      <button
        className="home"
        onClick={() => {
          handleFold();
          handleOnside(true);
          navigate("/");
        }}
      >
        Home
      </button>
      <p>PUBLIC</p>
      <div>
        <button
          onClick={() => {
            handleFold();
            handleOnside(true);
            navigate("/question");
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
          </svg>
          Questions
        </button>
        <button
          className="tags"
          onClick={() => {
            handleFold();
            handleOnside(true);
            navigate("/tags");
          }}
        >
          Tags
        </button>
      </div>
    </StyledMenu>
  );
}

export default TopMenu;
