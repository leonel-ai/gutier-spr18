import React, { PureComponent } from 'react';
import Form from './Form';
import Footer from './Footer';

import '../styles/Routes.css';

import contactImg1 from '../assets/careers.jpg';
import contactImg1Mobile from '../assets/careers-m.jpg';
import contactImg2 from '../assets/SER.jpg';
import contactImg2Mobile from '../assets/SER-m.jpg';
import contactGif0 from '../assets/gutier_gifs/G.gif';
import contactGif0Mobile from '../assets/gutier_gifs/mobile/G-m.gif';
import contactGif1 from '../assets/gutier_gifs/S.gif';
import contactGif1Mobile from '../assets/gutier_gifs/mobile/S-m.gif';
import contactGif2 from '../assets/gutier_gifs/E.gif';
import contactGif2Mobile from '../assets/gutier_gifs/mobile/E-m.gif';
import contactGif3 from '../assets/gutier_gifs/R.gif';
import contactGif3Mobile from '../assets/gutier_gifs/mobile/R-m.gif';
import brochure from '../assets/Gutier_Brochure.pdf';


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

					<svg viewBox="0 0 520 480" className="svg-news-mobile">
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
						<img src={contactGif0} alt="contactGif" />
					</div>
					<div className="con-gif0-m">
						<img src={contactGif0Mobile} alt="contactGif" />
					</div>

					<div className="con-text1">
						<p><span className="animated fadeInDown con-sub">Gutier Roofing + Sheet Metal</span></p>
						<p>3536 Navigation Boulevard <br/>
						Houston, Texas 77003<br/>
						<a href="tel:832-532-7823">Ph. 832.532.7823</a><br/>
						info@gutier.com<br/>
						</p>
						<form method="get" rel="noopener" target="_blank" action={brochure}>
							<button type="submit">Download Brochure</button>
						</form>
						<p><b>Connect with us:</b><br/>
							<a href="https://www.linkedin.com/company/9237937/" rel="noopener noreferrer" target="_blank">linkedin </a>
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
						<img src={contactImg1} alt="contactImg1" />
					</div>
					<div className="con-img1-m">
						<img src={contactImg1Mobile} alt="contactImg1Mobile" />
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
						<img src={contactGif1} alt="serGif" />
						<img src={contactGif2} alt="serGif" />
						<img src={contactGif3} alt="serGif" />
					</div>

					<div className="con-gif2-m">
						<img src={contactGif1Mobile} alt="serGif" />
						<img src={contactGif2Mobile} alt="serGif" />
						<img src={contactGif3Mobile} alt="serGif" />
					</div>

					<div className="con-title2">
						<h1 className="animated fadeInLeft con-title con-title2">Gutier + SER<br/>Jobs for Progress</h1>
						<p className="con-sub-ser">To apply:<br/>Please email your resume to <a href="mailto:info@gutier.com?subject=Hello, Gutier + SER">info@gutier.com</a></p>
					</div>

					<div className="con-img2">
						<img src={contactImg2} alt="contactImg2" />
					</div>
					<div className="con-img2-m">
						<img src={contactImg2Mobile} alt="contactImg2Mobile" />
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
										<li>&nbsp;&#9656; Hire qualitifed young adults who successfully complete the training program
											and meet job requirements for permanent jobs (when available).</li>
											<br/>
										<li>&nbsp;&#9656; Help connect students who are not hired by Gutier with employment opportunities
											for similar companies.</li>
											<br/>
										<li>&nbsp;&#9656; Ensure accelerated placement in employment or post-secondary education for
											program participants.</li>
											<br/>
										<li>&nbsp;&#9656; Develop employability and academic skills to succeed in training.</li>
											<br/>
										<li>&nbsp;&#9656; Deliver NCCER Level I Core Training for entry level positions and other
											vocational trainings for career advancement and/or mid-level skill jobs.</li>
											<br/>
										<li>&nbsp;&#9656; Provide work-based learning opportunities, such as internships and apprenticeships.</li>
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
