import React, {Component} from 'react';
import '../styles/Main.scss';
import logo from '../assets/logo.png';

// import certifications to footer

class Footer extends Component {
    state = {expanded: false}

    render(){
        return (
            <div className="main-footer-grid">
                <div className="ft-logo">
                    <a href="http://www.amagazi.com">
                        <img className="ft-logo-img" src={logo} alt="footer-logo"/>
                    </a>
                </div>

                <div className="ft-contact">
                    <h3>contact us</h3>
                    <p>3536 Navigation Blvd.<br/>
                       Houston, TX 77003<br/>
                       832.532.7823<br/>
                       <a href="mailto:info@gutier.com?subject=Hello, Gutier!">info@gutier.com</a>
                    </p>
                </div>

                <div className="ft-social">
                    <h3>follow us</h3>
                    <p>
                        <a href="https://www.linkedin.com/company/amagazi/">linkedin</a><br/>
                        <a href="https://www.facebook.com/amagazi">facebook</a><br/>
                    </p>
                </div>

            </div>
        );
    }
}

export default Footer;