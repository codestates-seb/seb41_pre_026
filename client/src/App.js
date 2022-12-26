import Questions from "./Pages/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import SideBar from "./Components/Share/SideBar";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <SideBar />
      <Routes>
        <Route path={"/1"} element={<Questions />} />
        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
