import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';


class Cube extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (document.getElementsByClassName('front')) {
            var front = document.getElementsByClassName('front');
            console.log('does match');
        } else {
            console.log('does not match');
        }
        // document.getElementsByClassName('front').classList.toggle('turnPage');
        // document.getElementsByClassName('back').classList.toggle('turnPage');
        // document.getElementsByClassName('right').classList.toggle('turnPage');
        // document.getElementsByClassName('left').classList.toggle('turnPage');
    }

    render() {
        return (
            <div className="mainDiv">
                <div className="cube">

                    <div className="front" onClick={this.handleClick} >
                        <p><span className="hm-largeTxt">INNOVATION</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/services">Services</Link></button>
                    </div>

                    <div className="back" onClick={this.handleClick} >
                        <p><span className="hm-largeTxt">EXCELLENCE</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/news">News</Link></button>                        
                    </div>

                    <div className="right" onClick={this.handleClick} >
                        <p><span className="hm-largeTxt">COMMITMENT</span><br/>starts from the top</p>
                        <button className="hm-button"><Link to="/contact">Contact</Link></button>                         
                    </div>

                    <div className="left" onClick={this.handleClick} >
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