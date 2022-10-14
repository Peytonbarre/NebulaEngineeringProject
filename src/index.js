import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";

import { App } from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
