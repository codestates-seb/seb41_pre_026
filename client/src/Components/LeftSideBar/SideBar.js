import { Link, useLocation } from "react-router-dom";
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

function SideBar() {
  const label = ["/", "/question", "/tags"];
  const location = useLocation();

  console.log(location.pathname);

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
          to={"/questions"}
          className={location.pathname === label[1] ? "active" : null}
        >
          Questionss
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
