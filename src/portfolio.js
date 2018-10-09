import React from 'react';
import Projects from './projects';
import About from './bio';
import ContactMe from './contact';

import './portfolio.css';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	render() {
		return (
			<div className="Portfolio">
				<header className="Portfolio-header">
					<h1 className="App-title">Shelly Leung</h1>
					{/* <h2>I Love Backend & Databases</h2> */}
					<About ref="bio" />
				</header>
				{/* <Navbar /> */}
				<main>
					<p className="Portfolio-intro" />
					<Projects ref="projects" />
					<ContactMe />
				</main>
			</div>
		);
	}
}
