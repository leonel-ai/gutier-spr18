import React, { PureComponent } from 'react';
import '../styles/Routes.scss';


import logo1 from '../assets/cert-dbe.png';
import logo2 from '../assets/cert-mbe.png';
import logo3 from '../assets/cert-sb.png';
import logo4 from '../assets/cert-txh.png';


class Footer extends PureComponent {
	state = {expanded: false}

	render(){
		return (
			<div className="main-footer-grid">
				<div className="ft-logo">
						<img className="ft-logo-img" src={logo1} alt="footer-logo"/>
						<img className="ft-logo-img" src={logo2} alt="footer-logo"/>
						<img className="ft-logo-img" src={logo3} alt="footer-logo"/>
						<img className="ft-logo-img" src={logo4} alt="footer-logo"/>
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
						<li><a href="https://www.linkedin.com/company/9237937/">linkedin</a></li>
						<li><a href="https://www.facebook.com/gutierconstruction/">facebook</a></li>
						<li><a href="https://www.medium.com/">blog</a></li>
					</ul>
				</div>

			</div>
		)
	}
}

export default Footer;
