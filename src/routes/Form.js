import React, { PureComponent } from 'react';
import '../styles/Routes.css';


class Form extends PureComponent {

	render() {
		return (
			<div>
				<form action="https://formspree.io/info@gutier.com" method="POST">
					<label className="form-title">Name</label>
					<input type="text" name="name" />
					<label className="form-title">Email</label>
					<input type="email" name="_replyto" />
					<label className="form-title">Message</label>
					<textarea type="text" name="subject" />
						<br/>
					<button className="submit" type="submit" value="Send">Submit</button>
				</form>
			</div>
		)
	}
}

export default Form;
