import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Features from "./components/Features";
import Form from "./components/Form";

import { Container, Row, Col } from "./components/Grid";


class App extends Component {

  render() {
    return (
      <div>
        <Jumbotron/>

        <div id="divFeatures">
        <Features/>
        </div>
      </div>
    );
  }
}

export default App;
