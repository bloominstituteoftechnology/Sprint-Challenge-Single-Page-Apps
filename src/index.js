import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
