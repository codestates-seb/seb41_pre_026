import styled from "styled-components";
import SideBar from "../LeftSideBar/SideBar";
import { useEffect, useState } from "react";

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
  li:nth-of-type(n + 2) {
    padding: 0px 0px 0px 20px;
  }
`;

function LeftSideBar() {
  const [curNav, setCurNav] = useState("Home");

  useEffect(() => {
    console.log(curNav);
  }, [curNav]);

  return (
    <StyledNav>
      <StyledUl>
        <SideBar curNav={curNav} setCurNav={setCurNav} />
      </StyledUl>
    </StyledNav>
  );
}

export default LeftSideBar;
