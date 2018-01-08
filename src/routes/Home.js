import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cube from './Cube';
import '../styles/Main.css';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.history.push('/');
	}


	render() {
		return (
			<div className="hm-grid">
				<Cube />
				<div className="sidenav">
					<Link to='/contact' className="side-contact">Need a quote?</Link>
				</div>
			</div>
		)
	}
}

export default Home;
