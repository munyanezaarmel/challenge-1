import React, { useState } from "react";
export default function Landing() {
  const [showList, setShowList] = useState(false);
  return (
    <div className="hero">
      <div className="navbar">
        <div className="logo">
          <img src="../../../images/rice.png" alt="logo image" />
        </div>
        <div className="navbar-left">
          <div className="nav-links">
            <div className="single" id="active">
              Home
            </div>
            <div className="single">Menu</div>
            <div className="single">Services</div>
            <div className="single">Map</div>
            <div className="single">About</div>
          </div>
        </div>
        <div className="icon">
          <img src="../../../images/icon.svg" alt="nav-icon" />
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="body">
        <div className="paragraph">
          <div className="paragraph-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
          </div>
        </div>

        {/* 
            
       
           
        </div> */}
        <div className="body-images">
          <div className="left-text-image">
            <div className="text-left" id="right-text-id">
              02
            </div>
            <div className="left-container">
              <img
                src="../../../images/left.png"
                alt="left image"
                className="left"
              />
            </div>
          </div>
          <div className="text-right-image">
            <div className="text-right">02</div>
            <div className="right-image">
              <img
                src="../../../images/right.png"
                alt="right image"
                className="right"
              />
            </div>
          </div>
        </div>
        
        <div className="paragraph-2">
          <div className="paragraph-2-title">
            Lorem ipsum dolor sit amet, consetetur.
          </div>
          <div className="paragraph-2-sub">Lorem ipsum</div>
        </div>
      </div>
      <div className="footer">
        <div className="progress-bar">
                  <div className="numbers">
                      <p className="number active-number" >01</p>
                      <p className="number">02</p>
                      <p className="number">03</p>
                      <p className="number">04</p>
                      <p className="number">05</p>
                  </div>
                  <div className="lines">
                      <div className="line1"></div>
                      <div className="line2"></div>
                  </div>
        </div>
        <div className="icons">
          <div className="arrows-icon">
            <img src="../../../images/arrows.svg" alt="arrows-icon" />
          </div>
          <div className="social-media-icons">
            <img src="../../../images/icons.svg" alt="social-media-icons" className="social-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}
