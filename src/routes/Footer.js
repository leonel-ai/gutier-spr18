import React, { PureComponent } from 'react';
import '../styles/Routes.scss';
import logo from '../assets/logo.png';

// import certifications to footer

class Footer extends PureComponent {
	state = {expanded: false}

	render(){
		return (
			<div className="main-footer-grid">
				<div className="ft-logo">
					<a href="http://www.amagazi.com">
						<img className="ft-logo-img" src={logo} alt="footer-logo"/>
					</a>
				</div>

				<div className="ft-contact">
					<p className="ft-cta">contact us</p>
					<ul><li>3536 Navigation Blvd.
					   Houston, TX 77003</li>
						<li>832.532.7823</li>
						<li><a href="mailto:info@gutier.com?subject=Hello, Gutier!">info@gutier.com</a></li>
					</ul>
				</div>

				<div className="ft-social">
					<p className="ft-cta">follow us</p>
					<ul>
						<li><a href="https://www.linkedin.com/company/amagazi/">linkedin</a></li>
						<li><a href="https://www.facebook.com/amagazi">facebook</a></li>
						<li><a href="https://www.medium.com/">blog</a></li>
					</ul>
				</div>

			</div>
		)
	}
}

export default Footer;
