import * as React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

import Navbar from "./Navbar"
import Home from "./Home";
import { Game } from "./Game";
import Code from "./Code";
import Team from "./Team";
// import { Error404 } from "./Error404";
import "./App.css";


export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/code" element={<Code />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
