import React, {Component} from 'react';
import '../styles/Main.css';
import homeGif from '../assets/cube.gif';

class Home extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="hm-grid">
                <div className="hm-box1">
                    <img className="hm-pg-img" src={homeGif} alt="homepage" />
                </div>

                {/* <div className="hm-box1-mob">
                    <img className="hm-pg-img" src={homeMobile} alt="homepage" />
                </div> */}
            </div>
        )
    }
}

export default Home;