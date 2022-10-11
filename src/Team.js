import * as React from "react";
import Navbar from "./Navbar";

import "./Team.css";


export class Team extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="CardSections">
            <div className="Card1">
              <a id="atimg1"><div className="teamImg" id="timg1"></div></a>
              <div className="teamImgText">
                <h1>Temoc</h1>
                <h2>Team lead</h2>
                <h3>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</h3>
                <div className="SmallSection">
                  <h4>temoc1@utdallas.edu</h4>
                  <h4>888-888-8888</h4>
                </div>
              </div>
            </div>
            <img src="/long-lines-straight-line-transparent-7.png" alt="Line" id="Line"></img>
            <div className="Card2">
              <a id="#atimg2"><div className="teamImg" id="timg2"></div></a>
                <div className="teamImgText">
                <h1>Temoc</h1>
                <h2>Team lead</h2>
                <h3>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</h3>
                <div className="SmallSection">
                  <h4>temoc1@utdallas.edu</h4>
                  <h4>888-888-8888</h4>
                </div>
              </div>
            </div>
            <img src="/long-lines-straight-line-transparent-7.png" alt="Line" id="Line"></img>
            <div className="Card3">
              <a id="atimg3"><div className="teamImg" id="timg3"></div></a>
              <div className="teamImgText">
                <h1>Temoc</h1>
                <h2>Team lead</h2>
                <h3>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</h3>
                <div className="SmallSection">
                  <h4>temoc1@utdallas.edu</h4>
                  <h4>888-888-8888</h4>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default Team;
