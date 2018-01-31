import React, { PureComponent } from 'react';
import Form from './Form';
import Footer from './Footer';

import '../styles/Routes.css';

import contactImage1 from '../assets/g3.png';
import contactImage2 from '../assets/SER.png';
import contactGif0 from '../assets/gutier_gifs/G.gif';
import contactGif2 from '../assets/gutier_gifs/S.gif';
import contactGif3 from '../assets/gutier_gifs/E.gif';
import contactGif4 from '../assets/gutier_gifs/R.gif';
import brochure from '../assets/Gutier_Brochure-2.pdf';


class Contact extends PureComponent {
	state = {expanded: false}

	render() {
		return (
			<div className="con-grid">
				<div className="con-banner">

					<svg viewBox="0 0 800 400" className="svg-con-desktop">
						<symbol id="s-text">
							<text textAnchor="middle"
										x="50%"
										y="35%"
										className="text--line"
										>
									CONTACT US
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

					<svg viewBox="0 0 520 590" className="svg-news-mobile">
						<symbol id="s-text">
							<text textAnchor="middle"
										x="0%"
										y="5%"
										className="text--line"
										>
									CONTACT US
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

				<div className="con-box1-desk" id="contact">

					<div className="con-gif0">
						<img src={contactGif0} alt="contactGif0" />
					</div>

					<div className="con-text1">
						<p><span className="animated fadeInDown con-sub">Gutier Roofing + Sheet Metal</span></p>
						<p>3536 Navigation Boulevard <br/>
						Houston, Texas 77003<br/>
						Ph. 832.532.7823<br/>
						info@gutier.com<br/>
						</p>
						<form method="get" rel="noopener" target="_blank" action={brochure}>
							<button type="submit">Download Brochure</button>
						</form>
						<p><b>Connect with us:</b><br/>
							<a href="https://www.linkedin.com/company/9237937/" rel="noopener noreferrer" target="_blank">linkedin </a>
							<a href="https://www.facebook.com/gutierconstruction/" rel="noopener noreferrer" target="_blank">| facebook </a>
							<a href="https://www.medium.com/@gutier" rel="noopener noreferrer" target="_blank">| blog</a>
						</p>
					</div>

					<div className="contact-form">
						<Form />
					</div>
				</div>


				<div className="con-box2-desk">

					<div className="con-title1">
						<h1 className="animated fadeInRight con-title con-title1">Careers</h1>
					</div>

					<div className="con-img1">
						<img src={contactImage1} alt="contactImage1" />
					</div>

					<div className="con-text2">
						<p>Join our family of roofing experts who value safety,
							quality, and accountability above all. A career with Gutier
							will help you rise to the top in your expertise.
								<br/><br/>
								Contact us today to apply.
						</p>
					</div>
				</div>


				<div className="con-box3-desk">

					<div className="con-gif2">
						<img src={contactGif2} alt="contactGif2" />
						<img src={contactGif3} alt="contactGif3" />
						<img src={contactGif4} alt="contactGif4" />
					</div>

					<div className="con-title2">
						<h1 className="animated fadeInLeft con-title con-title2">Gutier + SER<br/>Jobs for Progress</h1>
						<p className="con-sub-ser">To apply,<br/>please email your resume to <a href="mailto:info@gutier.com?subject=Hello, Gutier + SER">info@gutier.com</a></p>
					</div>

					<div className="con-img2">
						<img src={contactImage2} alt="contactImage2" />
					</div>

					<div className="con-text3">
						<p><span className="animated fadeInDown con-sub">Vocational Training Program</span></p>
							<p>Gutier and SER Jobs for Progress work together to provide education, vocational
								training and employment for young adults in need of career and life mentorship.
								Through our partnership with the Bridges to College and Career Success (BCCS)
								initiative, Gutier and SER Jobs for Progress prepare program participants for
								full-time employment opportunities through hands-on training labs.
								<br/><br/>
								Together, we are committed to achieving the following:
								<br/><br/>
										<li>&nbsp;&#9657; Hire qualitifed young adults who successfully complete the training program
											and meet job requirements for permanent jobs (when available).</li>
											<br/>
										<li>&nbsp;&#9657; Help connect students who are not hired by Gutier with employment opportunities
											for similar companies.</li>
											<br/>
										<li>&nbsp;&#9657; Ensure accelerated placement in employment or post-secondary education for
											program participants.</li>
											<br/>
										<li>&nbsp;&#9657; Develop employability and academic skills to succeed in training.</li>
											<br/>
										<li>&nbsp;&#9657; Deliver NCCER Level I Core Training for entry level positions and other
											vocational trainings for career advancement and/or mid-level skill jobs.</li>
											<br/>
										<li>&nbsp;&#9657; Provide work-based learning opportunities, such as internships and apprenticeships.</li>
								<br/>
								</p>
						</div>
				</div>

				<div className="pg-footer">
					<Footer />
				</div>
			</div>
		)
	}
}

export default Contact;
