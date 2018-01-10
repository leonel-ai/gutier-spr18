import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import '../styles/Routes.css';

import serviceImage1 from '../assets/g2.png';
import serviceImage2 from '../assets/g4.png';
import serviceGif1 from '../assets/gutier_gifs/E.gif';
import serviceGif2 from '../assets/gutier_gifs/M.gif';
import quoteOpen from '../assets/gutier_gifs/quote1.gif';
import quoteClose from '../assets/gutier_gifs/quote2.gif';
import clientGif1 from '../assets/gutier_gifs/clients1.gif';
import clientGif2 from '../assets/gutier_gifs/clients2.gif';


class Services extends PureComponent {
	state = {expanded: false}

	render() {
		return (
				<div className="srv-grid">
					<div className="srv-banner">
						<h1 className="srv-banner-text">Services</h1>
					</div>

					<div className="srv-box1-desk">

						<div className="srv-gif1">
							<img src={serviceGif1} alt="serviceGif1" />
						</div>

						<div className="srv-title1">
							<h1 className="animated fadeInLeft srv-title srv-title1">Expertise</h1>
						</div>

						<div className="srv-img1">
							<img src={serviceImage1} alt="serviceImage1" />
						</div>

						<div className="srv-text1">
							<p>
								Re-Roofing<br/>
								New Roof Construction<br/>
								Roof Maintenance<br/>
								Sheet Metal<br/>
								Waterproofing<br/>
								Roof Coatings and Restoration
							</p>
						</div>
					</div>


					<div className="srv-box2-desk">

						<div className="srv-gif2">
							<img src={serviceGif2} alt="serviceGif2" />
						</div>

						<div className="srv-title2">
							<h1 className="animated fadeInRight srv-title srv-title2">Markets</h1>
						</div>

						<div className="srv-market1">
							<div className="commercial">
								<div className="com-block1">
										<p><span className="animated fadeInDown com-sub">Commercial</span>
											<ul>
												<li>Office</li>
												<li>Healthcare</li>
												<li>Education</li>
												<li>Multi-family</li>
												<li>Mixed-use</li>
												<li>Hospitality</li>
												<li>Warehouse</li>
												<li>Retail</li>
											</ul>
										</p></div>
								<div className="com-block2">
										<img src={clientGif1} alt="clientGif1" />
								</div>
							</div>
						</div>

						<div className="srv-market2">
							<div className="industrial">
								<div className="ind-block1">
									<p><span className="animated fadeInDown ind-sub">Industrial</span>
										<ul>
											<li>Power</li>
											<li>Distribution + Storage</li>
											<li>Production Facilities</li>
											<li>Refineries</li>
											<li>Chemical</li>
											<li>Processing Plants</li>
											<li>Manufacturing</li>
											<li>Pharmaceutical + Biotech</li>
										</ul>
									</p></div>
								<div className="ind-block2">
									<img src={clientGif2} alt="clientGif2" />
								</div>
							</div>
						</div>

					</div>


					<div className="srv-box3-desk">

						<div className="srv-title3">
							<h1 className="animated fadeInLeft srv-title srv-title3">Trust</h1>
						</div>

						<div className="quotations">
							<div className="srv-gif3">
								<img src={quoteOpen} alt="quoteOpen" />
							</div>

							<div className="srv-gif4">
								<img src={quoteClose} alt="quoteClose" />
							</div>
						</div>


						<div className="srv-trust">
							<div className="quote">
								<p>"From the beginning, they were very timely with
								scheduling meetings, estimates, and completing our roof. They kept a clean
								site and didn't interrupt our operations at all. Excellent group to work with!"
									<br/><br/>— Jonathan Thomas, Stampede Land Services</p></div>
							<div className="quote">
								<p>"They presented us solutions very well and excuted
								the project exactly as promised... can't say enough about their professionalism
								and how great they are aobut communicating progress. Top notch."
									<br/><br/>— Ellis Welker, WFMS Inc.</p></div>
							<div className="quote">
								<p>"Everything about their operations was extremely
								professional and informative. They took the time to walk me through our
								problem areas and discussed solutions for us to consider... they had our interests
								in mind."
									<br/><br/>— Ross Summers, Texas Auto</p></div>
						</div>
					</div>

					<div className="sidenav">
						<Link to='/contact' className="side-contact">Need a quote?</Link>
					</div>

					<div className="pg-footer">
						<Footer />
					</div>
			</div>
		)
	}
}

export default Services;
