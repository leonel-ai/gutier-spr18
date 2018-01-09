import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Cube from './Cube';
import '../styles/Main.css';


class Home extends PureComponent {
	constructor(props) {
		super(props);
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
