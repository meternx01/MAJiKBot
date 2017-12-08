import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';
// import Form from "./components/Form";
import Footer from './components/Footer';
// import ChatBot from "./components/ChatBot";
import JumbotronLogged from './components/JumbotronLogged';

import { Container, Row, Col } from './components/Grid';

class App extends Component {
  state = {
    authenticated: false
  }

	login = () => {
		this.setState(() => ({ authenticated: true }));
	};

	render() {
		return <div>
        <div className="first-div">
        {/* conditionally render the Jumbotron based off of the authentication state:
        if (this.state.authenticated === true) {
          render JumbotronLogged
        } else {
          render Jumbotron and pass the login function to be called on login form submit
        } */}
					{this.state.authenticated ? <JumbotronLogged /> : <Jumbotron login={this.login} />}
					<div id="two" className="feat-div">
						<Features authenticated={this.state.authenticated} />
					</div>
				</div>
				<div id="one" className="second-div" />
				<Footer />
			</div>;
	}
}

export default App;
