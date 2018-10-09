import React from 'react';
import './bio.css';
import Portrait from './images/bio-pic.png';

export default function Bio(props) {
	return (
		<div className="about-me">
			<div className="self-portrait">
				<img src={Portrait} alt="that's me!" />
			</div>

			<div className="intro">
				<h3>It's All About ME!!</h3>
				<b>Evil Laugh</b>
				<p>Hi.</p>
			</div>

			<div className="skills">
				<p>
					{' '}
					Things I know:
					<ul>
						<li>Thing One</li>
						<li>Thing Two</li>
						<li>Thing Three</li>
					</ul>
				</p>
			</div>
		</div>
	);
}
