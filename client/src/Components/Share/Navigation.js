import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import menu from "../../Assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledNav = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  border-top: 3px solid #f48225;
  border-bottom: 1px solid #dadbdc;
  box-shadow: 0 4px 4px -4px #e2e3e4;

  nav {
    height: 26px;
  }

  img:last-child {
    margin: 0px 10px 0px 20px;
  }

  a {
    color: black;
    text-decoration: none;
    margin: 0px 15px 0px 15px;
    font-size: 12px;
    font-weight: 400;
    color: #696969;
  }
`;

const StyledSearch = styled.div`
  width: 665px;
  height: 33px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ focused }) => (focused ? "#6BBBF7" : "#BABFC4")};
  box-shadow: ${({ focused }) => (focused ? "0px 0px 4px 4px #d3e5f2" : "")};
  border-radius: 2px;

  svg {
    color: #838c95;
    margin: 0px 5px 0px 10px;
  }

  input {
    width: 93%;
    border: 0px;
  }
`;

const StyledDiv = styled.div`
  display: ${({ focused }) => (focused ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 250px;
  position: fixed;
  top: 50px;

  div {
    width: 665px;
    height: 100%;
    border: 1px solid #babfc4;
    border-radius: 7px;
    margin-left: 436px;
    box-shadow: 0 4px 4px -4px #e2e3e4;
    background-color: white;
  }
`;

function Navigation() {
  // const [isLogin, setIsLogin] = useState(false);
  const [focused, setfocused] = useState(false);

  const handleFocuse = (e) => {
    setfocused(!focused);
  };

  return (
    <>
      <StyledNav>
        <img src={menu} alt="menu" />
        <img src={logo} alt="logo" />
        <nav>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Products</Link>
          <Link to={"/"}>For Teams</Link>
        </nav>
        <StyledSearch focused={focused}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Search..."
            onFocus={handleFocuse}
            onBlur={handleFocuse}
          ></input>
        </StyledSearch>
      </StyledNav>
      <StyledDiv focused={focused}>
        <div></div>
      </StyledDiv>
    </>
  );
}

export default Navigation;
