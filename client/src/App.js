import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
import { useState } from "react";
import Login from "./Pages/Login";
// import Home from "./Pages/Home";
import Sign from "./Pages/Sign";
import Ask from "./Pages/Ask";
import Home from "./Pages/Home";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [onSide, setOnSide] = useState(false);
  const location = useLocation();
  const unSideList = ["/login", "/sign", "/ask"];

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleOnside = (value = null) => {
    value ? setOnSide(value) : setOnSide(!onSide);
  };

  const curPageBy = () => {
    if (!isLogin && location.pathname === "/") return false;
    return !unSideList.includes(location.pathname);
  };

  return (
    <>
      <Navigation
        isLogin={isLogin}
        onSide={onSide}
        handleOnside={handleOnside}
        curPageBy={curPageBy}
      />
      <StyledFrame>
        {onSide && curPageBy() ? <LeftSideBar /> : null}
        <Routes>
          <Route
            path={"/"}
            // element={<Home isLogin={isLogin} setOnSide={setOnSide} />}
            element={<Home />}
          />
          <Route
            path={"/question"}
            element={<Questions setOnSide={setOnSide} />}
          />
          <Route
            path={"/login"}
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/ask"} element={<Ask />} />
        </Routes>
        {onSide && curPageBy() ? <RightSideBar></RightSideBar> : null}
      </StyledFrame>
    </>
  );
}
export default App;
