import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';

import serviceImage1 from '../assets/services_01.jpg';
import serviceImage2 from '../assets/services_02.jpg';
import serviceGif1 from '../assets/gutier_gifs/E.gif';
import serviceGif2 from '../assets/gutier_gifs/M.gif';
import serviceGif3 from '../assets/gutier_gifs/I.gif';
import serviceGif4 from '../assets/gutier_gifs/I.gif';


class Services extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/services');
    }

    render() {
        return (
            <div className="srv-grid">
                <div className="srv-banner"> 
                    <h1 className="srv-banner-text">Services</h1> 
                </div>

                <div className="srv-box1-desk">
                    <div className="srv-gif1">
                        <img src={serviceGif1} alt="serviceGif1" />
                    </div>

                    <div className="srv-title1">
                        <h1 className="animated fadeInLeft srv-title srv-title1">Expertise</h1>
                    </div>

                    <div className="srv-img1">
                        <img src={serviceImage1} alt="serviceImage1" />
                    </div>

                    <div className="srv-text1">
                        <p>list here 
                        </p>
                    </div>
                </div>

                <div className="srv-box2-desk">

                    <div className="srv-title2">
                        <h1 className="animated fadeInRight srv-title srv-title2">Markets</h1>
                    </div>

                    <div className="srv-img2">
                        <img src={serviceImage2} alt="serviceImage2" />
                    </div>

                    <div className="srv-text2">
                        <p> create 2x3 grid for commercial and industrial markets, insert forrest client gifs</p>
                    </div>

                    <div className="srv-gif2">
                        <img src={serviceGif2} alt="serviceGif2" />
                    </div>

                </div>


                <div className="srv-box3-desk">
                    <div className="srv-title3">
                        <h1 className="animated fadeInLeft srv-title srv-title3">Trust</h1>
                    </div>

                    <div className="quotations">
                        <div className="srv-gif3">
                            <img src={serviceGif3} alt="serviceGif3" />
                        </div>

                        <div className="srv-gif4">
                            <img src={serviceGif4} alt="serviceGif4" />
                        </div>
                    </div>

                    <div className="srv-trust">
                        <div className="quote"><p>"From the beginning, they were very timely with
                        scheduling meetings, estimates, and completing our roof. They kept a clean
                        site and didn't interrupt our operations at all. Excellent group to work with!"
                        <br/>— Jonathan Thomas, Stampede Land Services</p></div>
                        <div className="quote"><p>"They presented us solutions very well and excuted
                        the project exactly as promised... can't say enough about their professionalism
                        and how great they are aobut communicating progress. Top notch." 
                        <br/>— Ellis Welker, WFMS Inc.</p></div>
                        <div className="quote"><p>"Everything about their operations was extremely
                        professional and informative. They took the time to walk me through our
                        problem areas and discussed solutions for us to consider... they had our interests
                        in mind."
                        <br/>— Ross Summers, Texas Auto</p></div>
                    </div>

                </div>

                <div className="pg-footer">
                    <Footer />
                </div>

            </div>
        )
    }
}

export default Services;