import React, {Component} from 'react';
import '../styles/Main.css';

class Contact extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div className="con-grid">
                contact page
            </div>
        )
    }
}

export default Contact;