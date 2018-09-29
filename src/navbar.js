import React from 'react';
import './navbar.css';

//**The anchor points need to be changed to Link when routing things out */

export default function Navbar(props) {
	return (
		<div className="navbar">
			<nav>
				<a href="#bio">About Me</a>
				<a href="#projects">Projects</a>
				<a href="#blog">Thoughts</a>
				<a href="#contact">Contact Me</a>
			</nav>
		</div>
	);
}
