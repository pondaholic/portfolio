import React from 'react';
import './projects.css';
import Mtg from './images/mtg.png';
import Bookmarker from './images/bookmark.png';

export default function Projects(props) {
	return (
		<div className="Projects">
			<div className="deck-app">
				<h3>
					An App to Create Your Dream <i>Magic the Gathering </i> Deck
				</h3>
				<li />
				<p>
					<b>React, HTML, CSS, JavaScript, & JQuery</b>
				</p>
				<p>
					<b>Node.js & Express </b>
				</p>
				<p>
					<b>PostgresQL</b>
				</p>
				<a
					href="https://github.com/thinkful-ei23/shelly-mtg-app"
					target="blank"
				>
					<img src={Mtg} />
				</a>
			</div>
			<div className="bookmarks">
				<h3>Something About Bookmarks</h3>
				<li />
				<p>
					<b>React, HTML, CSS, JavaScript</b>
				</p>
				<p>
					<b>Node.js & Express</b>
				</p>
				<p>
					<b>MongoDB</b>
				</p>
				<a href="#">
					<img src={Bookmarker} />
				</a>
			</div>
			<div className="kanben-app">
				<h3>How's Your Productivity?</h3>
			</div>
		</div>
	);
}
