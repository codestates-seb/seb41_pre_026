// import useRequest from "./Components/Share/Request";
import Questions from "./Pages/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const url = "http://43.200.68.32:8080";
  // const option = {
  //   method: "GET",
  //   body: "",
  // };
  // console.log(useRequest(url, option));
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
