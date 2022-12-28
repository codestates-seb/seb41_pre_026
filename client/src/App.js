import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
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
  );
}
export default App;
