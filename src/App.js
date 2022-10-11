import * as React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Home } from "./Home";
import { Game } from "./Game";
import { Code } from "./Code";
import { Team } from "./Team";
// import { Error404 } from "./Error404";
import "./App.css";


/** Main app class which routes to the various pages. */
export class App extends React.Component {
  render() {
    return (
      <div className="app">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/code" element={<Code />} />
              <Route path="/team" element={<Team />} />
                {/* <Route path="*">
                  <Error404 />
                </Route> */}
          </Routes>
      </div>
    );
  }
}


export default App;
