import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';

import '../styles/Routes.css';

import aboutImage1 from '../assets/g1.png';
import aboutImage2 from '../assets/g5.png';
import aboutGif1 from '../assets/gutier_gifs/W.gif';
import aboutGif2 from '../assets/gutier_gifs/C.gif';


class About extends PureComponent {
	state = {expanded: false}

	render() {
		return (
			<div className="ab-grid">
				<div className="ab-banner">
					<svg viewBox="0 0 800 400">
						<symbol id="s-text">
							<text text-anchor="middle"
										x="50%"
										y="35%"
										className="text--line"
										>
									ABOUT US
							</text>
						</symbol>

						<g className="g-ants">
							<use xlinkHref="#s-text"
								className="text-copy"></use>
							<use xlinkHref="#s-text"
								className="text-copy"></use>
							<use xlinkHref="#s-text"
								className="text-copy"></use>
							<use xlinkHref="#s-text"
								className="text-copy"></use>
							<use xlinkHref="#s-text"
								className="text-copy"></use>
						</g>
					</svg>
				</div>

				<div className="ab-box1-desk">

					<div className="ab-gif1">
						<img src={aboutGif1} alt="aboutGif1" />
					</div>

					<div className="ab-title1">
						<h1 className="animated fadeInLeft ab-title ab-title1">Why Gutier</h1>
					</div>

					<div className="ab-img1">
						<img src={aboutImage1} alt="aboutImage1" />
					</div>

					<div className="ab-text1">
						<p className="animated fadeInDown tenants">
								Safety |
								Accountability |
								Quality
						</p>
						<p>Our reputation is unmatched, and our work ethic is impeccable.
							We’ve built our company on the pillars of integrity, innovation,
							community, and a commitment to serve clients all over Texas.
							Our robust experience in commercial and industrial roofing,
							sheet metal, and waterproofing services has earned us the
							privilege to build solid, long-standing relationships with
							our clients. We’re trusted for our ability to deliver
							high-quality roofing solutions from small local repairs
							to large multimillion-dollar projects.
							<br/><br/>Contact us today for a customized estimate.
						</p>
					</div>
				</div>


				<div className="ab-box2-desk">

					<div className="ab-gif2">
						<img src={aboutGif2} alt="aboutGif2" />
					</div>

					<div className="ab-title2">
						<h1 className="animated fadeInRight ab-title ab-title2">Community</h1>
					</div>

					<div className="ab-text2">
						<p>Giving back to the is a key part of our identity at Gutier. We are
							committed to using our resources and expertise to drive change
							in the community and impact the lives of others. One of Gutier’s
							flagship partnerships is with <b>SER Jobs for Progress</b> (Service Employment
							Redevelopment) where we administer a collaborative vocational training program for young
							adults in need of career mentorship and life guidance.
							<br/><br/>Learn more about how we are making a difference.
						</p>
							<br/><br/>
						<p>
							<HashLink className="ctaTrainLink" to='/contact#contact'><span className="ctaTrain">Learn More</span></HashLink>
						</p>
					</div>

					<div className="ab-img2">
						<img src={aboutImage2} alt="aboutImage2" />
					</div>

				</div>

				<div className="sidenav">
					<HashLink to='/contact#contact' className="side-contact">Need a Quote?</HashLink>
				</div>

				<div className="pg-footer">
					<Footer />
				</div>
			</div>
		)
	}
}

export default About;
