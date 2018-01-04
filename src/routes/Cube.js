import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';


class Cube extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainDiv">
                <div className="cube">

                    <div className="front">
                        <p><span className="hm-largeTxt">INNOVATION</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/services">Services</Link></button>
                    </div>

                    <div className="back">
                        <p><span className="hm-largeTxt">EXCELLENCE</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/news">News</Link></button>                        
                    </div>

                    <div className="right">
                        <p><span className="hm-largeTxt">COMMITMENT</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/contact">Contact</Link></button>                         
                    </div>

                    <div className="left">
                        <p><span className="hm-largeTxt">INTEGRITY</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/about">About Us</Link></button> 
                    </div>

                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
            </div>
        )
    }
}

export default Cube;