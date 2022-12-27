import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
// import Footer from "./Components/Share/Footer";
import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
  height: 94%;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSide, setIsSide] = useState(false);
  const location = useLocation();
  const unSideList = ["/login", "/"];
  console.log(location.pathname, unSideList.includes(location.pathname));
  return (
    <>
      <Navigation
        login={{ isLogin, setIsLogin }}
        isSide={{ isSide, setIsSide }}
      />
      <StyledFrame>
        {isSide && !unSideList.includes(location.pathname) ? (
          <LeftSideBar />
        ) : null}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/question"} element={<Questions />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        {!unSideList.includes(location.pathname) ? (
          <RightSideBar></RightSideBar>
        ) : null}
      </StyledFrame>
    </>
  );
}
export default App;
