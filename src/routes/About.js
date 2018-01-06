import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';

import aboutImage1 from '../assets/about_us_01.jpg';
import aboutImage2 from '../assets/about_us_02.jpg';
import aboutGif1 from '../assets/gutier_gifs/W.gif';
import aboutGif2 from '../assets/gutier_gifs/C.gif';

 
class About extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div className="ab-grid">
                <div className="ab-banner"> 
                    <h1 className="ab-banner-text">About Us</h1> 
                </div>

                <div className="tenants">
                    <span className="animated fadeInLeft tenant1">Safety</span>
                    <span className="animated fadeInLeft tenant2">Accountability</span>
                    <span className="animated fadeInLeft tenant3">Quality</span>
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
                        <p>Our reputation is unmatched, and our work ethic is impeccable. 
                            We’ve built our company on the pillars of integrity, innovation, 
                            community, and a commitment to serve clients all over Texas. 
                            Our robust experience in commercial and industrial roofing, 
                            sheet metal, and waterproofing services has earned us the 
                            privilege to build solid, long-standing relationships with 
                            our clients. We’re trusted for our ability to deliver 
                            high-quality roofing solutions from small local repairs 
                            to large multimillion-dollar projects. Contact us today for 
                            a customized estimate.  
                        </p>
                    </div>
                </div>


                <div className="ab-box2-desk">

                    <div className="ab-title2">
                        <h1 className="animated fadeInRight ab-title ab-title2">Community</h1>
                    </div>

                    <div className="ab-img2">
                        <img src={aboutImage2} alt="aboutImage2" />
                    </div>

                    <div className="ab-text2">
                        <p>Community is a key part of our identity at Gutier. We are 
                            committed to using our resources and expertise to drive change 
                            in the community and impact the lives of others. One of Gutier’s 
                            flagship partnerships is with SER Jobs for Progress where we 
                            administer a collaborative vocational training program for young 
                            adults in need of career mentorship and life guidance. Learn more 
                            about how we are making a difference.
                        </p>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <p>
                        <Link className="ctaTrainLink" to='/contact'><span className="ctaTrain">Learn More</span></Link>
                        </p>
                    </div>

                    <div className="ab-gif2">
                        <img src={aboutGif2} alt="aboutGif2" />
                    </div>

                </div>

                <div className="pg-footer">
                    <Footer />
                </div>

            </div>
        )
    }
}

export default About;