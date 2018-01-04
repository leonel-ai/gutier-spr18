import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cube from './Cube';
import WheelReact from 'wheel-react';
import '../styles/Main.css';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.handleClick.bind(this);

        this.state = {
            content: <Cube />
        };
        WheelReact.config({
            left: () => {
                this.setState({
                    content: 'left direction detected.'
                });
            },
            right: () => {
                this.setState({
                    content: 'right direction detected.'
                });
            },
            up: () => {
                this.setState({
                    content: 'up direction detected.'
                });
            },
            down: () => {
                this.setState({
                    content: 'down direction detected.'
                });
            }
        });
    }

    componentWillMount() {
        this.props.history.push('/');
    }

    componentWillUnmount() {
        WheelReact.clearTimeout();
    }



    render() {

        return (
            <div {...WheelReact.events} tabIndex="1" className="hm-grid">
                {this.state.content}
            </div>
        )
    }
}

export default Home;
