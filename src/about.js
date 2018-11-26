import React from 'react';

import './about.css';

export default function AboutMe() {
	return (
		<div className="about-me">
			<h2>All About Me!</h2>
			<ul>
				<h3>
					<li className="first">Thing 1: A Passion for the Web</li>
				</h3>
				<p>
					I suppose I could ask you why I'd put myself through months of coding
					bootcamp if I didn't have a passion for it. But, then that would be
					rhetoical since you can't answer me.
				</p>
				<h3>
					<li className="second">Thing 2: Team Player</li>
				</h3>
				<p>
					While not everyone is a team player, I would jump at the any chance to
					learn from fellow programmers and seniors with more experience.
				</p>
				<h3>
					<li className="third">Thing 3: A World Outside Code?</li>
				</h3>
				<p>
					Yes, I have a life outside coding because anyone who only obsesses
					over a single matter tends to burn out.
				</p>
			</ul>
		</div>
	);
}
