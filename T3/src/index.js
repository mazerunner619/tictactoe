import React from "react";
import ReactDOM from "react-dom";
import MainBoard from "./board.js";
import Reaction from "./reactions.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MainBoard />
    {/* <Reaction /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
