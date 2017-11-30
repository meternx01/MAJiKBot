import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
