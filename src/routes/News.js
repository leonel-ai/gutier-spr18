import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';

import '../styles/Routes.css';

import newsImage1 from '../assets/cnn.png';
import newsImage2 from '../assets/tel.png';
import newsImage3 from '../assets/htv.png';
import logo from '../assets/logo.png';
import newsGif1 from '../assets/gutier_gifs/N.gif';
import newsGif2 from '../assets/gutier_gifs/I.gif';


class News extends PureComponent {
	state = {expanded: false}

	render() {
		return (
			<div className="news-grid">
				<div className="news-banner">

					<svg viewBox="0 0 800 400" className="svg-news-desktop">
						<symbol id="s-text">
							<text textAnchor="middle"
										x="50%"
										y="35%"
										className="text--line"
										>
									NEWS
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

					<svg viewBox="176 0 620 240" className="svg-news-mobile">
						<symbol id="s-text">
							<text textAnchor="middle"
										x="20%"
										y="25%"
										className="text--line"
										>
									NEWS
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

					<div className="sidenav-mob">
						<HashLink to='/contact#contact' className="side-contact">
							Get a Quote</HashLink>
					</div>

				<div className="news-box1-desk">
					<div className="news-gif1">
						<img src={newsGif1} alt="newsGif1" />
					</div>

					<div className="news-title1">
						<h1 className="animated fadeInLeft news-title news-title1">Latest Headlines</h1>
					</div>
				</div>


				<div className="news-box2-desk">
					<div className="news-img1">
						<img src={newsImage1} alt="newsImage1" />
					</div>

					<div className="news-text1">
						<div className="animated fadeInRight news-sub1"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0" rel="noopener noreferrer" target="_blank" >
							Immigrants, the workforce to rebuild Houston</a></div>
								<p>Gutier Helps Rebuild After Hurricane Harvey</p>
								<p className="actionLink"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0" rel="noopener noreferrer" target="_blank" >
								Watch the Interview &#9656;</a></p>
					</div>
				</div>


				<div className="news-box3-desk">
					<div className="news-text2">
						<div className="animated fadeInLeft news-sub2"><a href="http://www.telemundo.com/" rel="noopener noreferrer" target="_blank" >
						Hispanic impact in construction industry</a></div>
							<p>Gutier Boasts Solid Impact In Houston With Telemundo</p>
						</div>

						<div className="news-img2">
							<img src={newsImage2} alt="newsImage2" />
						</div>
				</div>


				<div className="news-box4-desk">
					<div className="news-img3">
						<img src={newsImage3} alt="newsImage3" />
					</div>
					<div className="news-text3">
					<div className="animated fadeInRight news-sub3"><a href="http://www.houstontx.gov/htv/insights-to-opportunity.html" rel="noopener noreferrer" target="_blank" >
						Insights to opportunity</a></div>
						<p>Gutier Reveals Big Projects In Texas With HTV Houston Television</p>
					</div>

					<div className="news-gif2">
						<img src={newsGif2} alt="newsGif2" />
					</div>
				</div>

				<div className="news-box6-desk">
					<div className="animated pulse logoMedium-img">
						<img src={logo} alt="logo" />
					</div>

					<div className="news-text4">
						<p>Interested in more?<br/>Check out our latest insights, recommendations, and industry trends
							at Medium.com.</p>
						<p className="actionLink"><a href="http://www.medium.com/@gutier" rel="noopener noreferrer" target="_blank" >Join the community and follow us.  &#9656;</a></p>
					</div>
				</div>


				<div className="pg-footer">
					<Footer />
				</div>

			</div>
		)
	}
}

export default News;
