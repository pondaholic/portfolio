import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function NavBar() {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/me">About Me</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/contact">Let's Build Something</Link>
				</li>
			</ul>
		</div>
	);
}
