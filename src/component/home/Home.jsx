import React, { useEffect } from "react";
import './style.css'
import vidz from '../../resource/vidz.mp4';
import untitled from '../../resource/Untitled.mp4';

function videoEnded(){
  var h = document.getElementById("head");
    var c = document.getElementById("fcon");
    document.getElementById("myvedio").style.display = 'none';
    document.getElementById("myvidz").style.display = 'block';
    h.style.animation = 'slideDown 2s ease-in';
    c.style.animation = 'fadeIn 2s ease-in';
    h.style.visibility = 'visible';
    c.style.visibility = 'visible';
}
function Home() {
  return (
    <div className="main" style={{display: "flex"}}>
      <div className="Wrapper" id="cover" style={{display: "flex"}}>
        <video id="myvedio" autoPlay muted width="100%" onEnded={()=>{videoEnded()}}>
          <source src={untitled} type="video/mp4" />
        </video>
        <video id="myvidz" autoPlay muted loop >
          <source src={vidz} type="video/mp4" />
        </video>

        <div className="header" id="head" style={{display: "flex"}}>
          <div className="logo" role="button" tabIndex="0">
            <a className="lg" href="/">
              <h1 id="mlogo">E-WASTE</h1>
            </a>
          </div>
          <div className="head1">
            <button className="sign">Home</button>
          </div>
          <div className="head2">
            <button className="sign">Sign In/Sign Up</button>
          </div>
        </div>

        <div
          className="fcontent"
          id="fcon"
          style={{display: "flex", flexDirection: "column"}}
        >
          <span className="mline">RECYCLE E-WASTE</span>
          <span className="mline">NOW !</span>
          <button id="mbutton">Locate Recycle Centers</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
