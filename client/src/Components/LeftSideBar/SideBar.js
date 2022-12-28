import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  height: 34px;
  a {
    width: 100%;
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

function SideBar() {
  const label = ["/", "/question", "/tags"];
  const location = useLocation();

  return (
    <>
      <StyledLi>
        <Link
          to={"/"}
          className={location.pathname === label[0] ? "active" : null}
        >
          Home
        </Link>
      </StyledLi>
      <p>Public</p>
      <StyledLi>
        <Link
          to={"/question"}
          className={location.pathname === label[1] ? "active" : null}
        >
          Questions
        </Link>
      </StyledLi>
      <StyledLi>
        <Link
          to={"/tags"}
          className={location.pathname === label[2] ? "active" : null}
        >
          Tags
        </Link>
      </StyledLi>
    </>
  );
}

export default SideBar;
