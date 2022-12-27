import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
// import Footer from "./Components/Share/Footer";
import { useState } from "react";
import Login from "./Pages/Login";

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

  console.log(location.pathname);

  return (
    <>
      <Navigation
        login={{ isLogin, setIsLogin }}
        isSide={{ isSide, setIsSide }}
      />
      <StyledFrame>
        {isSide && location.pathname !== "/login" ? <LeftSideBar /> : null}
        <Routes>
          <Route path={"/"} element={<Questions />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        {location.pathname !== "/login" ? <RightSideBar></RightSideBar> : null}
      </StyledFrame>
    </>
  );
}
export default App;
