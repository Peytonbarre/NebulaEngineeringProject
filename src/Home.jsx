import * as React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <div className="EverythingElse">
          <div className="main">
            <div className="left">
              <div className="paragraph">
                <p> A Passion Project Like No Other </p>
                <div className="ParButton">
                  <Link to="/game" id="GameButton">
                    Game
                  </Link>
                  <Link to="/code" id="CodeButton">
                    TODO
                  </Link>
                </div>
              </div>
            </div>
            {/*
              TODO:
              Create on-hover events for each of the icons. These on-hover events will
              trigger an animation that'll make the hovered object the layer on top and the other 2
              will shrink. Also when onlick, go to next page
            */}
            <div className="right">
              <div
                className="Blocks"
                id="Blocks1"
                onClick={(event) => (window.location.href = "/Team")}
              >
                <a href="#atimg1">
                  <div className="Bioimg" id="img1"></div>
                </a>
                <div claaName="Biotext">
                  <h1>Temoc</h1>
                  <h2>Project Lead</h2>
                  <h3>temoc@utdallas.edu</h3>
                  <h3>812-432-4635</h3>
                </div>
              </div>
              <div
                className="Blocks"
                id="Blocks2"
                onClick={(event) => (window.location.href = "/Team")}
              >
                <a href="#atimg2">
                  <div className="Bioimg" id="img2"></div>
                </a>
                <div claaName="Biotext">
                  <h1>Teemoc</h1>
                  <h2>Poor</h2>
                  <h3>fdsaf@utdallas.edu</h3>
                  <h3>812-432-4635</h3>
                </div>
              </div>
              <div
                className="Blocks"
                id="Blocks3"
                onClick={(event) => (window.location.href = "/Team")}
              >
                <a href="#atimg3">
                  <div className="Bioimg" id="img3"></div>
                </a>
                <div className="Biotext">
                  <h1>HUBUBUB</h1>
                  <h2>Project Lead</h2>
                  <h3>temoc@utdallas.edu</h3>
                  <h3>812-432-4635</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
