import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
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
					<HashLink to='/contact#contact' className="side-contact">Need a quote?</HashLink>
				</div>
			</div>
		)
	}
}

export default Home;
