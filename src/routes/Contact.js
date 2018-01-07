import React, {Component} from 'react';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';


class Contact extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div className="con-grid">
                <div className="con-banner"> 
                    <h1 className="con-banner-text">Contact Us</h1> 
                </div>  

                <div className="pg-footer">
                    <Footer />
                </div>  
         </div>
        )
    }
}

export default Contact;