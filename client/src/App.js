import Questions from "./Pages/Questions";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
import Footer from "./Components/Share/Footer";
import { useState } from "react";
import Login from "./Pages/Login";

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
  // const [isLocate, setIsLocate] = useState("/");

  return (
    <BrowserRouter>
      <StyledBody />
      <Navigation login={{ isLogin, setIsLogin }} />
      <StyledFrame>
        <LeftSideBar />
        <Routes>
          <Route path={"/"} element={<Questions />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        <RightSideBar></RightSideBar>
      </StyledFrame>
    </BrowserRouter>
  );
}
export default App;
