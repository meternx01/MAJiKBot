import React from 'react';
import './Jumbotron.css';
import Form from '../Form';

const Jumbotron = props => (
	<div className="header-container">
		<div className="video-container">
			<video preload="true" autoPlay="true" loop="loop" muted>
				<source src="/images/womantype.mp4" type="video/mp4" />
			</video>
		</div>
		{/* render login form and pass the login function
  for setting authentication state in the App component */}
		<Form login={props.login} />
	</div>
);

export default Jumbotron;
