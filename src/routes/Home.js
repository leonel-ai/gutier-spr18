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
			</div>
		)
	}
}

export default Home;
