import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  height: 34px;
  a {
    width: 99%;
    height: 100%;
    display: flex;
    font-size: 12px;
    font-weight: 500;
    color: #525960;
    text-decoration: none;
    align-items: center;
  }
  :hover {
    cursor: pointer;
    background-color: #e3e6e8;
    a {
      font-weight: 500;
      color: black;
    }
  }
  .active {
    font-weight: 600 !important;
    color: black !important;
    border-right: 3px solid #f48255;
  }
`;
function SideBar({ handleCurNav, curNav }) {
  const label = ["Home", "Public", "Questions"];

  return (
    <>
      <StyledLi curNav={curNav} onClick={(e) => e.target}>
        <Link
          to={"/"}
          onClick={handleCurNav}
          className={label[0] === curNav ? "active" : null}
        >
          Home
        </Link>
      </StyledLi>
      <p>Public</p>
      <StyledLi curNav={curNav}>
        <Link
          to={"/"}
          onClick={handleCurNav}
          className={label[1] === curNav ? "active" : null}
        >
          Questions
        </Link>
      </StyledLi>
      <StyledLi curNav={curNav}>
        <Link
          to={"/"}
          onClick={handleCurNav}
          className={label[2] === curNav ? "active" : null}
        >
          Tags
        </Link>
      </StyledLi>
    </>
  );
}

export default SideBar;
