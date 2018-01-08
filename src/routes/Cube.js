import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';


class Cube extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="buttons-wrapper">

				<input id="slide1" type="radio" name="slider" checked />
				<input id="slide2" type="radio" name="slider" />
				<input id="slide3" type="radio" name="slider" />
				<input id="slide4" type="radio" name="slider" />

				<ul class="slider">
					<li>
						<div class="caption">
							<h3>INNOVATION</h3>
							<p>
							starts from the top
							</p>
						</div>
					</li>
					<li>
						<div class="caption">
							<h3>INTEGRITY</h3>
							<p>
							starts from the top
							</p>
						</div>
					</li>
					<li>
						<div class="caption">
							<h3>EXCELLENCE</h3>
							<p>
							starts from the top
							</p>
						</div>
					</li>
					<li>
						<div class="caption">
							<h3>COMMITMENT</h3>
							<p>
							starts from the top
							</p>
						</div>
					</li>
				</ul>

				<label for="slide1"></label>
				<label for="slide2"></label>
				<label for="slide3"></label>
				<label for="slide4"></label>

			</div>
		)
	}
}

export default Cube;