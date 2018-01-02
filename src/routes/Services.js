import React, {Component} from 'react';
import '../styles/Main.css';

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