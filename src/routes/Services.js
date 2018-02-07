import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';

import '../styles/Routes.css';

import serviceImg from '../assets/expertise.jpg';
import serviceImgMobile from '../assets/expertise-m.jpg';
import serviceGif1 from '../assets/gutier_gifs/E.gif';
import serviceGif1Mobile from '../assets/gutier_gifs/mobile/E-m.gif';
import serviceGif2 from '../assets/gutier_gifs/M.gif';
import serviceGif2Mobile from '../assets/gutier_gifs/mobile/M-m.gif';
import quoteOpen from '../assets/gutier_gifs/quote1.gif';
import quoteOpenMobile from '../assets/gutier_gifs/mobile/quote1-m.gif';
import quoteClose from '../assets/gutier_gifs/quote2.gif';
import quoteCloseMobile from '../assets/gutier_gifs/mobile/quote2-m.gif';
import clientGif1 from '../assets/gutier_gifs/clients1.gif';
import clientGif1Mobile from '../assets/gutier_gifs/mobile/clients1-m.gif';
import clientGif2 from '../assets/gutier_gifs/clients2.gif';
import clientGif2Mobile from '../assets/gutier_gifs/mobile/clients2-m.gif';

class Services extends PureComponent {
	state = {expanded: false}

	render() {
		return (
				<div className="srv-grid">
					<div className="srv-banner">

						<svg viewBox="0 0 800 400" className="svg-srv-desktop">
							<symbol id="s-text">
								<text textAnchor="middle"
											x="50%"
											y="35%"
											className="text--line"
											>
										SERVICES
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


						<svg viewBox="0 0 520 460" className="svg-srv-mobile">
							<symbol id="s-text">
								<text textAnchor="middle"
											x="30%"
											y="35%"
											className="text--line"
											>
										SERVICES
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

					<div className="srv-box1-desk">

						<div className="srv-gif1">
							<img src={serviceGif1} alt="serviceGif" />
						</div>
						<div className="srv-gif1-m">
							<img src={serviceGif1Mobile} alt="serviceGif" />
						</div>

						<div className="srv-title1">
							<h1 className="animated fadeInLeft srv-title srv-title1">Expertise</h1>
						</div>

						<div className="srv-img1">
							<img src={serviceImg} alt="serviceImg" />
						</div>

						<div className="srv-img1-m">
							<img src={serviceImgMobile} alt="serviceImg" />
						</div>

						<div className="srv-text1">
							<p><span className="srv-type">Roofing Services</span><br/>
								New Construction<br/>
								Re-Roofing<br/>
								Roof Maintenance + Repairs<br/>
								</p>
							<p><span className="srv-type">Roof System Installation</span><br/>
								Built-up (BUR)<br/>
								Liquid Applied<br/>
								Modified Bitumen<br/>
								Sheet Metal<br/>
								Single-Ply<br/>
								Specialty<br/>
								Waterproofing
								</p>
						</div>
					</div>


					<div className="srv-box2-desk">

						<div className="srv-gif2">
							<img src={serviceGif2} alt="serviceGif" />
						</div>
						<div className="srv-gif2-m">
							<img src={serviceGif2Mobile} alt="serviceGif" />
						</div>

						<div className="srv-title2">
							<h1 className="animated fadeInRight srv-title srv-title2">Markets</h1>
						</div>

						<div className="srv-market1">
							<div className="commercial">
								<div className="com-block1">
										<p><span className="animated fadeInDown com-sub">Commercial</span><br/>
											Office<br/>
											Healthcare<br/>
											Education<br/>
											Multi-family<br/>
											Mixed-use<br/>
											Hospitality<br/>
											Warehouse<br/>
											Retail
										</p>
										</div>
								<div className="com-block2">
									<img src={clientGif1} alt="clientGif" />
								</div>
							</div>
						</div>

						<div className="srv-market2">
							<div className="industrial">
								<div className="ind-block1">
									<p><span className="animated fadeInDown ind-sub">Industrial</span><br/>
										Power<br/>
										Distribution + Storage<br/>
										Production Facilities<br/>
										Refineries<br/>
										Chemical<br/>
										Processing Plants<br/>
										Manufacturing<br/>
										Pharmaceutical + Biotech
									</p>
									</div>
								<div className="ind-block2">
									<img src={clientGif2} alt="clientGif" />
								</div>
							</div>
						</div>

					</div>


					<div className="srv-box3-desk">

						<div className="srv-trust-desk">
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
						</div>


						<div className="srv-market-mob">

								<div className="com-block1">
										<p><span className="animated fadeInDown com-sub">Commercial</span><br/>
											Office<br/>
											Healthcare<br/>
											Education<br/>
											Multi-family<br/>
											Mixed-use<br/>
											Hospitality<br/>
											Warehouse<br/>
											Retail
										</p>
										</div>

									<div className="ind-block1">
									<p><span className="animated fadeInDown ind-sub">Industrial</span><br/>
										Power<br/>
										Distribution + Storage<br/>
										Production Facilities<br/>
										Refineries<br/>
										Chemical<br/>
										Processing Plants<br/>
										Manufacturing<br/>
										Pharmaceutical + Biotech
									</p>
									</div>

								<div className="com-block2">
										<img src={clientGif1Mobile} alt="clientGif" />
								</div>

								<div className="ind-block2">
									<img src={clientGif2Mobile} alt="clientGif" />
								</div>
							</div>

					<div className="srv-box3-mobile">

						<div className="srv-title3">
							<h1 className="animated fadeInLeft srv-title srv-title3">Trust</h1>
						</div>

						<div className="quotations">
							<div className="srv-gif3">
								<img src={quoteOpenMobile} alt="quoteOpen" />
							</div>

							<div className="srv-gif4">
								<img src={quoteCloseMobile} alt="quoteClose" />
							</div>
						</div>
					</div>

						<div className="srv-trust">
							<p className="animated fadeInDown trustSub">
								What Our Clients Say About Us
							</p>
							<div className="quote">
								<p>"From the beginning, they were very timely with
								scheduling meetings, estimates, and completing our roof. They kept a clean
								site and didn't interrupt our operations at all. Excellent group to work with!"
									<br/><br/>— Jonathan Thomas, Stampede Land Services</p></div>
							<div className="quote">
								<p>"They presented us solutions very well and executed
								the project exactly as promised... can't say enough about their professionalism
								and how great they are about communicating progress. Top notch."
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
						<HashLink to='/contact#contact' className="side-contact">
							Get a Quote</HashLink>
					</div>

					<div className="pg-footer">
						<Footer />
					</div>
			</div>
		)
	}
}

export default Services;
