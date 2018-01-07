import React, {Component} from 'react';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';

import newsImage1 from '../assets/cnn.png';
import newsImage2 from '../assets/tel.png';
import newsImage3 from '../assets/htv.png';
import newsGif1 from '../assets/gutier_gifs/N.gif';



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
                    <div className="animated animated fadeInRight news-sub1"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0">
                        Immigrants, the workforce to rebuild Houston</a></div>
                    <p>Gutier on CNN En Espanol</p>
                    </div>
                </div>                    

                <div className="news-box3-desk">
                    <div className="news-text2">
                        <div className="animated animated fadeInLeft news-sub2"><a href="http://www.telemundo.com/">
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
                    <div className="animated animated fadeInRight news-sub3"><a href="https://cnnespanol.cnn.com/video/cnnee-pkg-gustavo-valdes-la-resconstruccion-despues-de-harvey/#0">
                        Immigrants, the workforce to rebuild Houston</a></div>
                    <p>Gutier on CNN En Espanol</p>
                    </div>
                </div>

                <div className="news-box5-desk">
                    MEDIUM promo
                </div>

                <div className="pg-footer">
                    <Footer />
                </div>

            </div>
        )
    }
}

export default News;