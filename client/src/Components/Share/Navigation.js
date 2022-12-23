import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import menu from "../../Assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { searchData } from "../../Assets/searchData";

const StyledNav = styled.header`
  width: 100%;
  min-width: 1240px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  border-top: 3px solid #f48225;
  border-bottom: 1px solid #dadbdc;
  box-shadow: 0 4px 4px -4px #e2e3e4;

  button:nth-of-type(1) {
    width: 48px;
    height: 100%;
    border: 0px;
    margin: 0px;
    padding: 0px;

    :hover {
      background-color: #e0e3e5;
    }

    img {
      margin: 5px 0px 0px 0px;
    }
  }

  button:nth-of-type(2) {
    width: 169px;
    height: 100%;
    border: 0px;
    margin: 0px;
    padding: 0px;

    :hover {
      background-color: #e0e3e5;
    }

    img {
      margin: 5px 0px 0px 0px;
    }
  }

  nav {
    height: 26px;
  }

  a {
    text-decoration: none;
    margin: 0px 15px 0px 15px;
    font-size: 12px;
    font-weight: 400;
    color: #696969;
  }

  button:nth-of-type(3) {
    margin: 0px 5px 0px 5px;
  }

  nav {
    display: flex;

    div {
      height: 30px;

      :hover {
        border-radius: 30px;
        background-color: #e0e3e5;
        cursor: pointer;
      }
    }
  }
`;

const StyledSearch = styled.div`
  width: 665px;
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
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1240px;
  height: 170px;
  position: fixed;
  top: 50px;
`;

const StyledHistory = styled.div`
  visibility: ${({ focused }) => (focused ? "visible" : "hidden")};
  position: relative;
  top: -2px;
  left: 39px;
  width: 667px;
  height: 100%;
  border: 1px solid #babfc4;
  border-radius: 7px;
  box-shadow: 0 4px 4px -4px #e2e3e4;
  background-color: white;

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
`;

const StyledMenu = styled.div`
  visibility: ${({ isFold }) => (isFold ? "visible" : "hidden")};
  position: relative;
  top: 1px;
  left: -173px;
  width: 240px;
  height: 300px;
  background-color: white;
  border: 1px solid #e3e6e8;
`;

function Navigation() {
  // const [isLogin, setIsLogin] = useState(false);
  const [focused, setFocused] = useState(false);
  const [isFold, setIsFold] = useState(false);

  const handleFocuse = (e) => {
    setFocused(!focused);
  };

  const handleFold = (e) => {
    setIsFold(!isFold);
  };

  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (focused) {
        handleFocuse();
      }
    });
  }, [focused]);

  return (
    <>
      <StyledNav>
        <button onClick={handleFold}>
          <img src={menu} alt="menu" />
          <div className="layer"></div>
        </button>
        <button>
          <img src={logo} alt="logo" />
        </button>
        <nav>
          <div>
            <Link to={"/"}>About</Link>
          </div>
          <div>
            <Link to={"/"}>Products</Link>
          </div>
          <div>
            <Link to={"/"}>For Teams</Link>
          </div>
        </nav>
        <StyledSearch
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
                handleFocuse();
              }
            }}
          ></input>
        </StyledSearch>
        <StyledButton type={1}>Log in</StyledButton>
        <StyledButton type={2}>Sign up</StyledButton>
      </StyledNav>
      <StyledDiv onClick={(e) => e.stopPropagation()}>
        <StyledMenu isFold={isFold}></StyledMenu>
        <StyledHistory focused={focused}>
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
    </>
  );
}

export default Navigation;
