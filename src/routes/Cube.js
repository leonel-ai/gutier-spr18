import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Main.css';


class Cube extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buttons-wrapper">

				<input id="slide1" type="radio" name="slider" checked />
				<input id="slide2" type="radio" name="slider" />
				<input id="slide3" type="radio" name="slider" />
				<input id="slide4" type="radio" name="slider" />

				<ul className="slider">
					<li>
						<div className="caption">
							<h1>COMMITMENT</h1>
							<p>STARTS FROM THE TOP</p>
							<button><NavLink to="/services" activeClassName="is-active">Services</NavLink></button>
						</div>
					</li>
					<li>
						<div className="caption">
							<h1>INTEGRITY STARTS FROM THE TOP</h1>
							<button><NavLink to="/about" activeClassName="is-active">About</NavLink></button>
						</div>
					</li>
					<li>
						<div className="caption">
							<h1>EXCELLENCE STARTS FROM THE TOP</h1>
							<button><NavLink to="/news" activeClassName="is-active">News</NavLink></button>
						</div>
					</li>
					<li>
						<div className="caption">
							<h1>COMMITMENT STARTS FROM THE TOP</h1>
							<button><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></button>
						</div>
					</li>
				</ul>

				<label htmlFor="slide1"></label>
				<label htmlFor="slide2"></label>
				<label htmlFor="slide3"></label>
				<label htmlFor="slide4"></label>

			</div>
		)
	}
}

export default Cube;
