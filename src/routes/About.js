import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';

import '../styles/Routes.css';

import aboutImg1 from '../assets/whyGutier.jpg';
import aboutImg1Mobile from '../assets/whyGutier-m.jpg';
import aboutImg2 from '../assets/community.jpg';
import aboutImg2Mobile from '../assets/community-m.jpg';
import aboutGif1 from '../assets/gutier_gifs/W.gif';
import aboutGif1Mobile from '../assets/gutier_gifs/mobile/W-m.gif';
import aboutGif2 from '../assets/gutier_gifs/C.gif';
import aboutGif2Mobile from '../assets/gutier_gifs/mobile/C-m.gif';


class About extends PureComponent {
	state = {expanded: false}

	render() {
		return (
			<div className="ab-grid">
				<div className="ab-banner">

					<svg viewBox="0 0 800 400" className="svg-ab-desktop">
						<symbol id="s-text">
							<text textAnchor="middle"
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

				<svg viewBox="0 0 520 400" className="svg-ab-mobile">
						<symbol id="s-text">
							<text textAnchor="middle"
										x="30%"
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
						<img src={aboutGif1} alt="aboutGif" />
					</div>
					<div className="ab-gif1-m">
						<img src={aboutGif1Mobile} alt="aboutGif" />
					</div>

					<div className="ab-title1">
						<h1 className="animated fadeInLeft ab-title ab-title1">Why Gutier</h1>
					</div>

					<div className="ab-img1">
						<img src={aboutImg1} alt="aboutImg1" />
					</div>
					<div className="ab-img1-m">
						<img src={aboutImg1Mobile} alt="aboutImg1Mobile" />
					</div>

					<div className="ab-text1">
						<p className="animated fadeInDown tenants">
								Safety |
								Quality |
								Accountability
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
						<img src={aboutGif2} alt="aboutGif" />
					</div>
					<div className="ab-gif2-m">
						<img src={aboutGif2Mobile} alt="aboutGif" />
					</div>

					<div className="ab-title2">
						<h1 className="animated fadeInRight ab-title ab-title2">Community</h1>
					</div>

					<div className="ab-text2">
						<p>Giving back is a key part of our identity at Gutier. We are committed
							to using our resources and expertise to drive change in the community
							and impact the lives of others. One of Gutier’s flagship partnerships
							is with <b><a href="http://www.serhouston.org/">Service Employment Redevelopment (SER) Jobs for Progress</a></b>.
							This collaborative vocational training program provides an avenue for
							young adults to receive career mentorship and financial empowerment.
							<br/><br/>Together, we are making a difference.
						</p>
							<br/>
						<p>
							<HashLink className="ctaTrainLink" to='/contact#contact'><span className="ctaTrain">Learn More</span></HashLink>
						</p>
					</div>

					<div className="ab-img2">
						<img src={aboutImg2} alt="aboutImg2" />
					</div>
					<div className="ab-img2-m">
						<img src={aboutImg2Mobile} alt="aboutImg2Mobile" />
					</div>

				</div>

				<div className="sidenav">
					<HashLink to='/contact#contact' className="side-contact">Get a Quote</HashLink>
				</div>

				<div className="pg-footer">
					<Footer />
				</div>
			</div>
		)
	}
}

export default About;
