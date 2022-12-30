import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import LeftSideBar from "./Components/Share/LeftSideBar";
import RightSideBar from "./Components/Share/RightSideBar";
import { useState } from "react";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Ask from "./Pages/Ask";
import Home from "./Pages/Home";
import Tags from "./Pages/Tags";
import Member from "./Pages/Member";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [onSide, setOnSide] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleOnside = (value = null) => {
    value ? setOnSide(value) : setOnSide(!onSide);
  };

  return (
    <>
      <Navigation
        isLogin={isLogin}
        onSide={onSide}
        handleOnside={handleOnside}
      />
      <StyledFrame>
        <LeftSideBar isLogin={isLogin} />
        <Routes>
          <Route
            path={"/"}
            element={<Home isLogin={isLogin} setOnSide={setOnSide} />}
          />
          <Route
            path={"/questions"}
            element={<Questions setOnSide={setOnSide} />}
          />
          {/* <Route path={"/question"} element={<View />} /> */}
          <Route
            path={"/login"}
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/ask"} element={<Ask />} />
          <Route path={"/tags"} element={<Tags />} />
          <Route path={"/member"} element={<Member />} />
        </Routes>
        <RightSideBar isLogin={isLogin} />
      </StyledFrame>
    </>
  );
}
export default App;
