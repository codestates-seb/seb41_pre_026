import Questions from "./Pages/Questions";
import styled from "styled-components";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
// import Footer from "./Components/Share/Footer";
=======
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
>>>>>>> 136ef218c2ebee72fa90ef54f94517d163336b44
import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
  height: 94%;
`;

const StyledBody = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  body {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
  }
`;

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
<<<<<<< HEAD
  const [isSide, setIsSide] = useState(false);
  // const [isLocate, setIsLocate] = useState("/");

  return (
    <BrowserRouter>
      <StyledBody />
      <Navigation
        login={{ isLogin, setIsLogin }}
        isSide={{ isSide, setIsSide }}
      />
      <StyledFrame>
        {isSide ? <LeftSideBar /> : null}
        <Routes>
          <Route path={"/"} element={<Questions />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        <RightSideBar></RightSideBar>
      </StyledFrame>
    </BrowserRouter>
=======

  const location = useLocation();
  const unSideList = ["/login", "/", "/sign"];
  // console.log(location.pathname, unSideList.includes(location.pathname));

  const handleLogin = () => setIsLogin(!isLogin);
  const curPageBy = () => !unSideList.includes(location.pathname);

  console.log(curPageBy());

  return (
    <>
      <Navigation isLogin={isLogin} curPageBy={curPageBy} />
      <StyledFrame>
        {curPageBy() ? <LeftSideBar /> : null}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/question"} element={<Questions />} />
          <Route
            path={"/login"}
            element={<Login />}
            handleLogin={handleLogin}
          />
          <Route path={"/sign"} element={<Sign />} />
        </Routes>
        {curPageBy() ? <RightSideBar></RightSideBar> : null}
      </StyledFrame>
    </>
>>>>>>> 136ef218c2ebee72fa90ef54f94517d163336b44
  );
}
export default App;
