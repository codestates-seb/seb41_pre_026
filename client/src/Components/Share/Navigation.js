import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import menu from "../../Assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { searchData } from "../../Assets/searchData";
import profile from "../../Assets/profile.jpg";

const StyledNav = styled.div`
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
  background-color: white;
  z-index: 999;

  .menu {
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

  .logo {
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

  .login {
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
`;

const StyledMenu = styled.div`
  visibility: ${({ isFold }) => (isFold ? "visible" : "hidden")};
  position: relative;
  top: 1px;
  left: -172px;
  width: 240px;
  height: 300px;
  background-color: white;
  border: 1px solid #e3e6e8;
`;

const StyledIcons = styled.ol`
  display: flex;
  margin: 0px 0px 0px 10px;
  height: 100%;
  list-style-type: none;
  padding: 0px;
  float: left;
  li:first-child {
    width: 50px;
  }
  li {
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      width: 25px;
      height: 25px;
      border-radius: 3px;
    }
    svg {
      fill: #525960;
    }
    button {
      border: 0px;
      background-color: transparent;
    }
    :hover {
      background-color: #e0e3e5;
      cursor: pointer;
      button svg {
        fill: black;
      }
    }
    button: hover {
      cursor: pointer;
      svg {
        fill: black;
      }
    }
    button svg:hover {
      cursor: pointer;
      fill: black;
    }
  }
`;

function Navigation({ login, isSide }) {
  const [focused, setFocused] = useState(false);
  const [isFold, setIsFold] = useState(false);
  // const [iconFocuse, setIcF] = useState(false);

  const handleFocuse = (e) => {
    setFocused(!focused);
  };

  const handleFold = (e) => {
    setIsFold(!isFold);
  };

  const handleLogin = (e) => {
    login.setIsLogin(!login.isLogin);
  };

  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (focused) {
        handleFocuse();
      }
    });
  }, [focused]);

  return (
    <nav>
      <StyledNav>
        {isSide.isSide ? null : (
          <button onClick={handleFold} className="menu">
            <img src={menu} alt="menu" />
          </button>
        )}
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          {login.isLogin ? (
            <div>
              <Link to={"/"}>Products</Link>
            </div>
          ) : (
            <>
              <div>
                <Link to={"/"}>About</Link>
              </div>
              <div>
                <Link to={"/"}>Products</Link>
              </div>
              <div>
                <Link to={"/"}>For Teams</Link>
              </div>
            </>
          )}
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
        {login.isLogin ? (
          <StyledIcons>
            <li>
              <img src={profile} alt="profile img"></img>
            </li>
            <li>
              <button>
                <svg width="20" height="18" viewBox="0 0 20 18">
                  <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button>
                <svg width="18" height="18">
                  <path d="m8.9844-0.013672a1 1 0 0 0 -0.98438 1.0137v0.38281l-0.55273-0.27734a1 1 0 0 0 -0.48242 -0.11133 1 1 0 0 0 -0.41211 1.9004l1.4473 0.72266v3.6523l-3.1621-1.8262 0.097656-1.6152a1 1 0 0 0 -0.95117 -1.0742 1 1 0 0 0 -1.0449 0.95508l-0.037109 0.61719-0.33008-0.19141a1 1 0 0 0 -0.57422 -0.14062 1 1 0 0 0 -0.42578 1.8711l0.33203 0.19141-0.51758 0.3418a1 1 0 1 0 1.1016 1.668l1.3516-0.89258 3.1621 1.8262-3.1621 1.8262-1.3516-0.89258a1 1 0 0 0 -0.56445 -0.17383 1 1 0 0 0 -0.53711 1.8418l0.51758 0.3418-0.33203 0.19141a1 1 0 1 0 1 1.7305l0.33008-0.19141 0.037109 0.61719a1 1 0 1 0 1.9961 -0.11914l-0.097656-1.6152 3.1621-1.8262v3.6523l-1.4473 0.72266a1 1 0 0 0 0.89453 1.7891l0.55273-0.27734v0.38281a1 1 0 1 0 2 0v-0.38281l0.55273 0.27734a1 1 0 1 0 0.89453 -1.7891l-1.4473-0.72266v-3.6523l3.1621 1.8262-0.097656 1.6152a1 1 0 1 0 1.9961 0.11914l0.037109-0.61719 0.33008 0.19141a1 1 0 1 0 1 -1.7305l-0.33203-0.19141 0.51758-0.3418a1 1 0 0 0 -0.56641 -1.8418 1 1 0 0 0 -0.53516 0.17383l-1.3516 0.89258-3.1621-1.8262 3.1621-1.8262 1.3516 0.89258a1 1 0 1 0 1.1016 -1.668l-0.51758-0.3418 0.33203-0.19141a1 1 0 0 0 -0.45508 -1.8711 1 1 0 0 0 -0.54492 0.14062l-0.33008 0.19141-0.037109-0.61719a1 1 0 0 0 -0.97461 -0.95508 1 1 0 0 0 -1.0215 1.0742l0.097656 1.6152-3.1621 1.8262v-3.6523l1.4473-0.72266a1 1 0 1 0 -0.89453 -1.7891l-0.55273 0.27734v-0.38281a1 1 0 0 0 -1.0156 -1.0137z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button onClick={handleLogin}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                </svg>
              </button>
            </li>
          </StyledIcons>
        ) : (
          <>
            <StyledButton type={1} onClick={handleLogin} className="login">
              {login.isLogin ? "Log out" : "Log in"}
            </StyledButton>
            <StyledButton type={2}>Sign up</StyledButton>
          </>
        )}
      </StyledNav>
      <StyledDiv>
        <StyledMenu isFold={isFold}>
          <button
            onClick={() => {
              setIsFold(!isFold);
              isSide.setIsSide(!isSide.isSide);
            }}
          >
            x
          </button>
        </StyledMenu>
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
