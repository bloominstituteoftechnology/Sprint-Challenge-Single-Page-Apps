import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

/* established the Router from Browser Router dependency and import semantic UI CSS is present */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
