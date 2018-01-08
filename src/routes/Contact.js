import React, {Component} from 'react';
import Form from './Form';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';


import contactImage1 from '../assets/g3.png';
import contactImage2 from '../assets/SER.png';
import contactGif0 from '../assets/gutier_gifs/G.gif';
import contactGif1 from '../assets/gutier_gifs/C.gif';
import contactGif2 from '../assets/gutier_gifs/E.gif';


class Contact extends Component {
    state = {expanded: false}

    render() {
        return (
            <div className="con-grid">
                <div className="con-banner"> 
                    <h1 className="con-banner-text">Contact Us</h1> 
                </div>  
                
                <div className="con-box1-desk">

                    <div className="con-gif0">
                        <img src={contactGif0} alt="contactGif0" />
                    </div>

                    <div className="con-text1">
                        <p><span className="animated fadeInDown con-sub">Gutier Roofing<br/>+ Construction</span></p>
                        <p>3536 Navigation Boulevard <br/>
                        Houston, Texas 77003<br/>
                        PH: 832.532.7823<br/>
                        info@gutier.com<br/>
                        </p>
                    </div>

                    <div className="contact-form">
                        <Form />
                    </div>
                </div>


                <div className="con-box2-desk">
                    <div className="con-gif1">
                        <img src={contactGif1} alt="contactGif1" />
                    </div>

                    <div className="con-title1">
                        <h1 className="animated fadeInLeft con-title con-title1">Careers</h1>
                    </div>

                    <div className="con-img1">
                        <img src={contactImage1} alt="contactImage1" />
                    </div>

                    <div className="con-text2">
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
                

                <div className="con-box3-desk">
                    <div className="con-gif2">
                        <img src={contactGif2} alt="contactGif2" />
                    </div>

                    <div className="con-title2">
                        <h1 className="animated fadeInRight con-title con-title2">Gutier + SER:<br/>Jobs for Progress</h1>
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
                            <ul>
                                <li>&#9657; Hire qualitifed young adults who successfully complete the training program
                                    and meet job requirements for permanent jobs (when available).</li>
                                    <br/>
                                <li>&#9657; Help connect students who are not hired by Gutier with employment opportunities
                                    for similar companies.</li>
                                    <br/>
                                <li>&#9657; Ensure accelerated placement in employment or post-secondary education for 
                                    program participants.</li>
                                    <br/>
                                <li>&#9657; Develop employability and academic skills to succeed in training.</li>
                                <br/>
                                <li>&#9657; Deliver NCCER Level I Core Training for entry level positions and other
                                    vocational trainings for career advancement and/or mid-level skill jobs.</li>
                                    <br/>
                                <li>&#9657; Provide work-based learning opportunities, such as internships and apprenticeships.</li>
                            </ul>
                            <br/><br/>
                            To apply, please email your resume to info@gutier.com.
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