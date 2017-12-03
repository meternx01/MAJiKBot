import React from "react";
import "./Jumbotron.css";
import Form from "../Form";

const Jumbotron = () => (

<div className="header-container">
  <div className="video-container">
    <video preload="true" autoPlay="true" loop="loop" muted>
      <source src="/images/womantype.mp4" type="video/mp4"/>
    </video>
  </div>
  <Form/>
</div>


);

export default Jumbotron;
