import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const StyledGlobal = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html {
    height : 100%;
  }
  
  body {
    height : 100%;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;

    #root {
      height : 100%;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StyledGlobal />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
