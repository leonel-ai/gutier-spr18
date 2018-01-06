import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import '../styles/Main.css';
import 'animate.css';


class Services extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/services');
    }

    render() {
        return (
            <div className="srv-grid">
                services page
            </div>
        )
    }
}

export default Services;