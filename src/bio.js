import React from 'react';
import './bio.css';

export default function Bio(props) {
	return (
		<div className="about-me">
			<h3>It's All About ME!!</h3>
			<b>Evil Laugh</b>
			<p>This is all about Me.</p>
			<div className="photo-of-me">
				<img src="#" alt="this is a self-portrait of me" />
			</div>
		</div>
	);
}
