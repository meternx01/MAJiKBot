import React from "react";
import "./Jumbotron.css";
import Form from "../Form";

const Jumbotron = () => (

<div className="jumbotron jumbotron-fluid top-jumb">
  <div className="container">
    <video id="video-background" preload="true" muted autoPlay loop>
      <source src="/images/womantype.mp4" type="video/mp4"/>
    </video>
    <Form/>
  </div>
</div>


);

export default Jumbotron;
