import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Routes.css';


class Cube extends PureComponent {

	render() {

		return (
			<div className="buttons-wrapper">

				<input id="slide1" type="radio" name="slider" checked />
				<input id="slide2" type="radio" name="slider" />
				<input id="slide3" type="radio" name="slider" />
				<input id="slide4" type="radio" name="slider" />

				<ul className="slider">

					<li id="hm-side1">
						<div className="side1">
							<h1>INNOVATION</h1>
							<p>STARTS FROM THE TOP</p>
							<Link to="/services" name="button">Services</Link>
						</div>
					</li>

					<li id="hm-side2">
						<div className="side2">
							<h1>INTEGRITY</h1>
							<p>STARTS FROM THE TOP</p>
							<Link to="/about" name="button">About</Link>
						</div>
					</li>

					<li id="hm-side3">
						<div className="side3">
							<h1>EXCELLENCE</h1>
							<p>STARTS FROM THE TOP</p>
							<Link to="/news" name="button">News</Link>
						</div>
					</li>

					<li id="hm-side4">
						<div className="side4">
							<h1>COMMITMENT</h1>
							<p>STARTS FROM THE TOP</p>
							<Link to="/contact" name="button">Contact</Link>
						</div>
					</li>

				</ul>

				<HashLink className="link1" htmlFor="slide1" to="/#hm-side1"></HashLink>
				<HashLink className="link2" htmlFor="slide2" to="/#hm-side2"></HashLink>
				<HashLink className="link3" htmlFor="slide3" to="/#hm-side3"></HashLink>
				<HashLink className="link4" htmlFor="slide4" to="/#hm-side4"></HashLink>

			</div>
		)
	}
}

export default Cube;
