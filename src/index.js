import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";

ReactDOM.render(
  // <Provider store={createStore(reducers)}>
  <App />,
  // </Provider>,
  document.querySelector("#root")
);
