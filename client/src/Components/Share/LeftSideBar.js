import styled from "styled-components";

const StyledNav = styled.nav`
  width: 169px;
  height: auto;
  border-right: 1px solid #dadbdc;
`;

function LeftSideBar() {
  return (
    <StyledNav>
      <nav></nav>
    </StyledNav>
  );
}

export default LeftSideBar;
