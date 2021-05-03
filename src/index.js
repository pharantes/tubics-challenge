import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers.js";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

ReactDOM.render(
  <Router>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
