import Questions from "./Pages/Questions";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
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
import View from "./Pages/View";
import Cookie from "./util/cookie";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const cookie = new Cookie();
  const [isLogin, setIsLogin] = useState(cookie.get("userId"));
  const location = useLocation().pathname;

  const handleLogin = () => {
    setIsLogin();
  };

  return (
    <>
      <Navigation isLogin={isLogin} />
      <StyledFrame>
        <LeftSideBar isLogin={isLogin} />
        <Routes>
          <Route path={"/"} element={<Home isLogin={isLogin} />} />
          <Route path={"/questions"} element={<Questions />} />
          <Route path={"/question"} element={<View />} />
          <Route
            path={"/login"}
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/ask"} element={<Ask />} />
          <Route path={"/tags"} element={<Tags />} />
          <Route path={"/member"} element={<Member />} />
        </Routes>
        {location !== "/question" ? <RightSideBar isLogin={isLogin} /> : null}
      </StyledFrame>
    </>
  );
}
export default App;
