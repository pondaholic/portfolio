import React from 'react';

import './contact.css';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="contact-form">
				<p>
					Please use the Contact Form below to send me a message or just email
					me directly here:{' '}
					<a href="mailto:sleung102@yahoo.com">sleung102@yahoo.com</a>
				</p>
				<form action="https://formspree.io/sleung102@yahoo.com" method="POST">
					<input type="text" name="name" placeholder="Name" />
					<textarea
						// className="message"
						type="textarea"
						name="message"
						placeholder="Yes? You have a message for me?"
					/>
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
}
