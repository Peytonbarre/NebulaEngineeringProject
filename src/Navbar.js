import * as React from "react";
import { Link } from "react-router-dom";
import nebulaLogo from "./nebula.png";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={nebulaLogo} alt="NebulaLogo"></img>
        <ul className="navbar-buttons">
          <Link to='/game' className="navbutton">Game</Link>
          <Link to='/code' className="navbutton">Code</Link>
          <Link to='/team' className="navbutton">Team</Link>
        </ul>

      </div>
    )
  }
}

export default Navbar;
