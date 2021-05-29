import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouteWrapper from "./components/RouteWrapper";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <RouteWrapper />
  </Provider>,
  document.getElementById("root")
);
