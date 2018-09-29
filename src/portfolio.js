import React from 'react';
import Navbar from './navbar';
import Projects from './projects';
import About from './bio';

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
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h1 className="App-title">Shelly Leung</h1>
					<h2>Full Stack Developer</h2>
				</header>
				<Navbar />
				<main>
					<p className="Portfolio-intro" />
					<About ref="bio" />
					<Projects ref="projects" />
				</main>
			</div>
		);
	}
}
