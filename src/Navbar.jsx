import * as React from "react";
import { Link } from "react-router-dom";
import nebulaLogo from "./nebula.png";

import "./Navbar.css";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navimg">
          <img src={nebulaLogo} alt="NebulaLogo"></img>
        </Link>
        <ul className="navbar-buttons">
          <Link to="/game" className="navbutton">
            Game
          </Link>
          <Link to="/code" className="navbutton">
            TODO
          </Link>
          <Link to="/team" className="navbutton">
            Team
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
