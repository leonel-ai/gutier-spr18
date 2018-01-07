import React, {Component} from 'react';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';

import newsImage1 from '../assets/cnn.png';
import newsImage2 from '../assets/tel.png';
import newsImage3 from '../assets/htv.png';
import mediumImg from '../assets/medium.png';
import newsGif1 from '../assets/gutier_gifs/N.gif';
import newsGif2 from '../assets/gutier_gifs/I.gif';


class News extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/news');
    }

    render() {
        return (
            <div className="news-grid">
                <div className="news-banner"> 
                    <h1 className="news-banner-text">News</h1> 
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
                        <div className="animated fadeInRight news-sub1"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0">
                            Immigrants, the workforce to rebuild Houston</a></div>
                            <p>CNN En Espanol</p>
                            <p className="actionLink"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0">
                               See the video  &#9656;</a></p>
                    </div>
                </div>                    

                <div className="news-box3-desk">
                    <div className="news-text2">
                        <div className="animated fadeInLeft news-sub2"><a href="http://www.telemundo.com/">
                            Gutier headline tbd on Telemundo</a></div>
                        <p>Gutier on Telemundo (Air Date: 2018)</p>
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
                    <div className="animated fadeInRight news-sub3"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0">
                        Insights to Opportunity</a></div>
                    <p>HTV Houston Television</p>
                    </div>
                </div>

                <div className="news-box5-desk">
                    <div className="news-gif2">
                        <img src={newsGif2} alt="newsGif2" />
                    </div>

                    <div className="news-title1">
                        <h1 className="animated fadeInRight news-title news-title1">Insights</h1>
                    </div>
                </div>

                <div className="news-box6-desk">
                    <div className="animated pulse medium-img">
                        <img src={mediumImg} alt="mediumImg"/>
                    </div>
                    <div className="news-text4">
                    <p>Interested in more? Check out our latest insights, recommendations, and industry trends
                        at Medium.com.</p>
                    <p className="actionLink"><a href="http://www.medium.com/">Join the community and follow us!  &#9656;</a></p>
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