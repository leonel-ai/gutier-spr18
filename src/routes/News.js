import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';

import newsImage1 from '../assets/about_us_01.jpg';
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

                    <div className="news-img1">
                        <img src={newsImage1} alt="newsImage1" />
                    </div>

                    <div className="news-text1">
                        <p>Insights to Opportunity on HTV 
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

export default News;