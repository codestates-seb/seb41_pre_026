import Questions from "./Pages/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navigation from "./Components/Share/Navigation";
import SideBar from "./Components/Share/SideBar";

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

function App() {
  return (
    <BrowserRouter>
      <StyledBody />
      <Navigation />
      <SideBar />
      <Routes>
        <Route path={"/"} element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
