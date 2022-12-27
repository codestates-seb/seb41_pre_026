import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const StyledBody = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  html {
    height : 100%;
  }
  
  body {
    height : 100%;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;

    #root {
      height : 100%;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledBody />
    <App />
  </React.StrictMode>
);
