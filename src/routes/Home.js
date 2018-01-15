import React, { PureComponent } from 'react';
import { HashLink } from 'react-router-hash-link';
import Cube from './VrCube';

import '../styles/Routes.css';

class Home extends PureComponent {

	render() {
		return (
			<div className="hm-grid">
				<Cube />
				<div className="sidenav">
					<HashLink to='/contact#contact' className="side-contact">Get a Quote</HashLink>
				</div>

				<div className="sidenav-hm-mob">
					<HashLink to='/contact#contact' className="side-contact-hm">Quote</HashLink>
				</div>
			</div>
		)
	}
}

export default Home;
