import * as React from "react";
import Line from "./line.png"
import "./Team.css";

function Team(){
  return (
    <div>
        <div className="CardSections">
          <div className="Card1">
            <div className="teamImg" id="timg1"></div>
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
          <img src={Line} alt="Line" id="Line"></img>
          <div className="Card2">
            <div className="teamImg" id="timg2"></div>
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
          <img src={Line} alt="Line" id="Line"></img>
          <div className="Card3">
            <div className="teamImg" id="timg3"></div>
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

export default Team;
