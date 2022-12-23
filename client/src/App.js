import Questions from "./Pages/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation";
import SideBar from "./Components/Share/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <SideBar />
      <Routes>
        <Route path={"/"} element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
