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

<<<<<<< HEAD
=======
  const handleCurNav = (e) => {
    setCurNav(e.target.text);
  };

>>>>>>> 136ef218c2ebee72fa90ef54f94517d163336b44
  useEffect(() => {
    console.log(curNav);
  }, [curNav]);

  return (
    <StyledNav>
      <StyledUl>
<<<<<<< HEAD
        <SideBar curNav={curNav} setCurNav={setCurNav} />
=======
        <SideBar curNav={curNav} handleCurNav={handleCurNav} />
>>>>>>> 136ef218c2ebee72fa90ef54f94517d163336b44
      </StyledUl>
    </StyledNav>
  );
}

export default LeftSideBar;
