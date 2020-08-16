import React from "react";
import ReactDOM from "react-dom";
import ReactNotification from "react-notifications-component";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReactNotification />
  </React.StrictMode>,
  document.getElementById("root")
);
