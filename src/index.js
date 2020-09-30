import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./commonStyles/base";

render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
