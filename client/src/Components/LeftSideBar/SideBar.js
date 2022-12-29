import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  height: 34px;
  width: 100%;

  svg {
    fill: #838c95;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 0px;
    margin: 0px;
    text-align: left;
    font-size: 12px;
    color: #676d73;
    line-height: 1.2;
    cursor: pointer;
    text-decoration: none;
  }

  .questions {
    padding: 0px 0px 0px 5px;
    width: 89%;
  }

  .tags {
    padding: 0px 0px 0px 25px;
  }

  :hover {
    cursor: pointer;
    a {
      font-weight: 500;
      color: black;
    }
    svg {
      fill: black;
    }
  }
`;

function SideBar() {
  const label = ["/", "/question", "/tags"];
  const location = useLocation();

  return (
    <>
      <StyledLi className={location.pathname === label[0] ? "active" : null}>
        <Link to={"/"}>Home</Link>
      </StyledLi>
      <p>Public</p>
      <StyledLi className={location.pathname === label[1] ? "active" : null}>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
        </svg>
        <Link to={"/question"} className="questions">
          Questions
        </Link>
      </StyledLi>
      <StyledLi className={location.pathname === label[2] ? "active" : null}>
        <Link to={"/tags"} className="tags">
          Tags
        </Link>
      </StyledLi>
    </>
  );
}

export default SideBar;
