import React, { Component } from "react";
import "./Features.css";
import ChatBot from "../ChatBot";
// import Icon from "../Icon";

// import React from "react";
import { Col, Row, Container } from "../../components/Grid";

// remove Jumbotron Fluid ...
const Features = () => (
  <div className="big-cont">
    <div className="jumbotron jumbotron-fluid featjumb">
      <div className = "container feat-cont">
        <h1 className="feattitle">Features</h1>
        <hr className="br"></hr>
   				<Row>
   					<Col size="md-4">
   						<h4 className="featureHeading">Natural Language understanding</h4>
   					</Col>
   					<Col size="md-4">
   						<h4 className="featureHeading">Query Balances</h4>
   					</Col>

   					<Col size="md-4">
   						<h4 className="featureHeading">Identify Entities</h4>
   					</Col>

   				</Row>
   				<br />
   				<Row>
   					<Col size="md-4">
   						<h4 className="featureHeading">Tone Analyzer</h4>
   					</Col>
   					<Col size="md-4">
   						<h4 className="featureHeading">Transferring Payments</h4>
   					</Col>
   					<Col size="md-4">
   						<h4 className="featureHeading">Fluid Conversation</h4>
   					</Col>

   				</Row>
      </div>
      <ChatBot/>
      {/* <Icon/> */}
		</div>
  </div>
);

export default Features;
