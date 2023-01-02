import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import menu from "../../Assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { searchData } from "../../Assets/searchData";
import TopMenu from "../Navigation/TopMenu";
import Icons from "../Navigation/Icons";

const StyledNav = styled.div`
  width: 100%;
  min-width: 1240px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  border-top: 3px solid #f48225;
  border-bottom: 1px solid #dadbdc;
  box-shadow: 0 4px 4px -4px #e2e3e4;
  background-color: white;
  z-index: 999;

  .menu {
    width: 48px;
    height: 100%;
    border: 0px;
    margin: 0px;
    padding: 0px;
    cursor: pointer;

    :hover {
      background-color: #e0e3e5;
    }

    img {
      margin: 5px 0px 0px 0px;
    }
  }

  .logo {
    width: 171px;
    height: 100%;
    border: 0px;
    margin: 0px;
    padding: 0px;

    :hover {
      background-color: #e0e3e5;
    }
  }

  nav ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    gap: 5px;

    li {
      float: left;
      padding: 6px 12px 6px 12px;
    }

    li a {
      display: block;
      width: 100%;
      margin: 0px;
    }

    li:hover {
      background-color: #e0e3e5;
      border-radius: 30px;
      cursor: pointer;
      a {
        color: black;
      }
    }
  }

  a {
    text-decoration: none;
    margin: 0px 15px 0px 15px;
    font-size: 12px;
    font-weight: 400;
    color: #696969;
  }

  .non-active {
    pointer-events: none;
  }
`;

const StyledSearch = styled.div`
  width: ${({ isLogin }) => (isLogin ? "702px" : "665px")};
  height: 33px !important;
  display: flex;
  align-items: center;
  border: 1px solid ${({ focused }) => (focused ? "#6BBBF7" : "#BABFC4")};
  box-shadow: ${({ focused }) => (focused ? "0px 0px 4px 4px #d3e5f2" : "")};
  border-radius: 2px;
  margin: 0px 0px 0px 10px;

  svg {
    color: #838c95;
    margin: 0px 5px 0px 10px;
  }

  input {
    width: 93%;
    border: 0px;
    :focus {
      outline: none;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1240px;
  height: 1px;
  position: fixed;
  top: 50px;
  z-index: 33;
`;

const StyledHistory = styled.div`
  visibility: ${({ focused }) => (focused ? "visible" : "hidden")};
  position: relative;
  top: 3px;
  left: 43px;
  width: 667px;
  height: 174px;
  border: 1px solid #babfc4;
  border-radius: 7px;
  box-shadow: 0 4px 4px -4px #e2e3e4;
  background-color: white;
  z-index: 33;

  ul {
    margin: 10px 0px 0px 10px;
    padding: 0px;
    width: 100%;
    list-style-type: none;
    color: gray;
    font-size: 12px;

    li:nth-child(n) {
      margin: 0px 0px 5px 0px;
    }
  }

  div:first-child {
    width: 100%;
    height: 70%;
    display: flex;
  }

  div:last-child {
    width: 100%;
    height: 30%;
    border-top: 1px solid #babfc4;

    button {
      float: right;
      margin: 13px 10px 0px 0px;
    }
  }

  div span {
    font-size: 14px;
    font-weight: 400;
    color: black;
    margin: 0px 10px 0px 0px;
  }
`;

const StyledButton = styled.button`
  font-size: 12px;
  padding: 7px 10px 7px 10px;
  border: ${({ type }) =>
    type === 1 ? "1px solid #7AA7C7" : "1px solid #0A95FF"};
  border-radius: 3px;
  color: ${({ type }) => (type === 1 ? "#54759D" : "white")};
  background-color: ${({ type }) => (type === 1 ? "#E1ECF4" : "#0A95FF")};
  cursor: pointer;
  margin: 0px 0px 0px 10px;
`;

function Navigation({ isLogin, handleLogin }) {
  const [focused, setFocused] = useState(false);
  const [isFold, setIsFold] = useState(false);
  const location = useLocation().pathname;
  const unSideList = ["/login", "/sign", "/ask"];
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (focused) {
        setFocused(!focused);
      }
    });
  }, [focused]);

  const handleFold = () => {
    setIsFold(!isFold);
  };

  return (
    <nav>
      <StyledNav>
        {unSideList.includes(location) && !isLogin ? (
          <button onClick={handleFold} className="menu">
            <img src={menu} alt="menu" />
          </button>
        ) : null}
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            {isLogin ? (
              <li>
                <Link to={location} className="non-active">
                  Products
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <a href="https://stackoverflow.co/">About</a>
                </li>
                <li>
                  <Link to={location} className="non-active">
                    Products
                  </Link>
                </li>
                <li>
                  <a href="https://stackoverflow.co/teams/">For Teams</a>
                </li>
              </>
            )}
          </ul>
        </nav>
        <StyledSearch
          isLogin={isLogin}
          focused={focused}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => {
              if (!focused) {
                setFocused(!focused);
              }
            }}
          ></input>
        </StyledSearch>
        {isLogin ? (
          <Icons handleLogin={handleLogin} />
        ) : (
          <>
            <StyledButton
              type={1}
              onClick={() => navigate("/login")}
              className="login"
            >
              {isLogin ? "Log out" : "Log in"}
            </StyledButton>
            <StyledButton type={2} onClick={() => navigate("/sign")}>
              Sign up
            </StyledButton>
          </>
        )}
      </StyledNav>
      <StyledDiv>
        <TopMenu handleFold={handleFold} isFold={isFold} isLogin={isLogin} />
        <StyledHistory focused={focused} onClick={(e) => e.stopPropagation()}>
          <div>
            <ul>
              {searchData.slice(0, 4).map((data, idx) => {
                return (
                  <li key={idx}>
                    <span>{data[0]}</span>
                    {data[1]}
                  </li>
                );
              })}
            </ul>
            <ul>
              {searchData.slice(4).map((data, idx) => {
                return (
                  <li key={idx}>
                    <span>{data[0]}</span>
                    {data[1]}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button>ask Questions</button>
          </div>
        </StyledHistory>
      </StyledDiv>
    </nav>
  );
}

export default Navigation;
