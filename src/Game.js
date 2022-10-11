import * as React from "react";

import "./Game.css";


export class Game extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img src="nebula.png" alt="NebulaLogo"  onClick={event => window.location.href='/'}></img>
          <ul className="navbar-buttons">
            <button onClick={event => window.location.href='/Game'} className="navbutton">Game</button>
            <button onClick={event => window.location.href='/Code'} className="navbutton">Code</button>
            <button onClick={event => window.location.href='/Team'} className="navbutton">Team</button>
          </ul>
        </div>
      </div>
    );
  }
}


export default Game;
