import styled from "styled-components";
import SideBar from "../LeftSideBar/SideBar";
import { useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  width: 169px;
  height: auto;
  border-right: 1px solid #dadbdc;
  z-index: 600;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 28px 0px 0px 0px;
  padding: 0px 0px 0px 10px;

  p {
    font-size: 12px;
    font-weight: 500;
    color: #525960;
    margin: 20px 0px 10px 0px;
  }

  .active {
    a {
      font-weight: 600 !important;
      color: black !important;
      border-right: 3px solid #f48255;
    }
    svg {
      fill: black;
    }
  }
`;

function LeftSideBar() {
  const location = useLocation().pathname;
  const unSideList = ["/login", "/sign", "/ask", "/"];

  return (
    <>
      {unSideList.includes(location) ? null : (
        <StyledNav>
          <StyledUl>
            <SideBar />
          </StyledUl>
        </StyledNav>
      )}
    </>
  );
}

export default LeftSideBar;
