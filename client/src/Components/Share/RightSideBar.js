import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  width: 228px;
  height: auto;
  border-left: 1px solid #dadbdc;
`;

function RightSideBar() {
  const location = useLocation().pathname;
  const unSideList = [
    "/login",
    "/sign",
    "/ask",
    "/tags",
    "/member",
    "/question",
  ];

  return (
    <>
      {unSideList.includes(location) ? null : (
        <StyledNav>
          <nav></nav>
        </StyledNav>
      )}
    </>
  );
}

export default RightSideBar;
