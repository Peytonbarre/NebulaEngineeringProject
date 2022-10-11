import * as React from "react";

import "./Home.css";


export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img src="nebula.png" alt="NebulaLogo"></img>
          <ul className="navbar-buttons">
            <button className="navbutton">Game</button>
            <button className="navbutton">Code</button>
            <button className="navbutton">Team</button>
          </ul>

        </div>
        
        <div className="main">
          <div className="left">
            <div className="paragraph">
                <p> A Passion Project Like No Other </p>
                <div className="ParButton">
                  <button id="GameButton" href="/" type="button">Game</button>
                  <button id="CodeButton" href="/" type="button">Code</button>
                </div>
            </div>
          </div>
          
          
          
          <div className="right">
            <div className="Blocks">
                <div className="Bioimg" id="img1"></div>
                <div claaName="Biotext">
                    <h1>Temoc</h1>
                    <h2>Project Lead</h2>
                    <h3>temoc@utdallas.edu</h3>
                    <h3>812-432-4635</h3>
                </div>
            </div>
            <div className="Blocks">
                <div className="Bioimg" id="img2"></div>
                <div claaName="Biotext">
                    <h1>Teemoc</h1>
                    <h2>Poor</h2>
                    <h3>fdsaf@utdallas.edu</h3>
                    <h3>812-432-4635</h3>
                </div>
            </div>
            <div className="Blocks">
                <div className="Bioimg" id="img3"></div>
                <div claaName="Biotext">
                    <h1>HUBUBUB</h1>
                    <h2>Project Lead</h2>
                    <h3>temoc@utdallas.edu</h3>
                    <h3>812-432-4635</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
