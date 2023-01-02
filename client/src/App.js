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
// import Home from "./Pages/Home";
import Tags from "./Pages/Tags";
import Member from "./Pages/Member";
import View from "./Pages/View";
import Cookie from "./util/cookie";
import Edit from "./Pages/Edit";
// import Cookie from "./util/cookie";

const StyledFrame = styled.div`
  display: flex;
  position: relative;
  top: 51px;
  justify-content: center;
`;

function App() {
  const cookie = new Cookie();
  const [isLogin, setIsLogin] = useState(cookie.get("userId"));
  // const location = useLocation().pathname;

  const handleLogin = (value) => {
    setIsLogin(value);
  };

  return (
    <>
      <Navigation isLogin={isLogin} handleLogin={handleLogin} />
      <StyledFrame>
        {<LeftSideBar />}
        <Routes>
          <Route path={"/"} element={<Questions />} />
          <Route path={"/questions"} element={<Questions />} />
          <Route path={"/question"} element={<View isLogin={isLogin} />} />
          <Route
            path={"/login"}
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/ask"} element={<Ask />} />
          <Route path={"/tags"} element={<Tags />} />
          <Route
            path={"/member"}
            element={<Member handleLogin={handleLogin} />}
          />
          <Route path={"/edit"} element={<Edit />} />
        </Routes>
        {<RightSideBar />}
      </StyledFrame>
    </>
  );
}
export default App;
