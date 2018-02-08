import React, { PureComponent } from 'react';
import Footer from './Footer';

import '../styles/Routes.css';

import newsImg1 from '../assets/cnn.jpg';
import newsImg1Mobile from '../assets/cnn-m.jpg';
import newsImg2 from '../assets/tel.jpg';
import newsImg2Mobile from '../assets/tel-m.jpg';
import newsImg3 from '../assets/htv.jpg';
import newsImg3Mobile from '../assets/htv-m.jpg';
import logo from '../assets/logo.png';
import logoMobile from '../assets/logoMobile.png';
import newsGif1 from '../assets/gutier_gifs/N.gif';
import newsGif1Mobile from '../assets/gutier_gifs/mobile/N-m.gif';
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

					<svg viewBox="0 0 520 480" className="svg-news-mobile">
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

				<div className="news-box1-desk">
					<div className="news-gif1">
						<img src={newsGif1} alt="newsGif" />
					</div>
					<div className="news-gif1-m">
						<img src={newsGif1Mobile} alt="newsGif" />
					</div>

					<div className="news-title1">
						<h1 className="animated fadeInLeft news-title news-title1">Latest Headlines</h1>
					</div>
				</div>


				<div className="news-box2-desk">
					<div className="news-img1">
						<img src={newsImg1} alt="newsImg1" />
					</div>
					<div className="news-img1-m">
						<img src={newsImg1Mobile} alt="newsImg1Mobile" />
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
							<img src={newsImg2} alt="newsImg2" />
						</div>
						<div className="news-img2-m">
							<img src={newsImg2Mobile} alt="newsImg2Mobile" />
						</div>
				</div>


				<div className="news-box4-desk">
					<div className="news-img3">
						<img src={newsImg3} alt="newsImg3" />
					</div>
					<div className="news-img3-m">
						<img src={newsImg3Mobile} alt="newsImg3Mobile" />
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
					<div className="animated pulse logoSmall-img">
						<img src={logoMobile} alt="logoMobile" />
					</div>

					<div className="news-text4">
						<p>Interested in more?<br/>Check out our latest insights, recommendations, and industry trends.</p>
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
