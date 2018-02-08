import React, { PureComponent } from 'react';
import {
	Switch,
	Route, Link, NavLink,
	BrowserRouter as Router,
} from 'react-router-dom';
import logoWhite from '../assets/logo_white.png';


import Home from './Home';
import Services from './Services';
import About from './About';
import News from './News';
import Contact from './Contact';


class Routes extends PureComponent {

	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
							linksEl.style.display = 'none';
					} else {
							linksEl.style.display = 'block';
					}
	}

	render() {
		return (
			<Router>
				<div className="App">

					<nav className="navBar">
						<nav className="wrapper">
							<div className="logo">
							<Link to='/'><img src={logoWhite} alt="logo"/></Link>
							</div>
								<input type="checkbox" id="menu-toggle" />
								<label htmlFor="menu-toggle" className="label-toggle"></label>
							<ul>
								<li className="home-mobile"><NavLink activeStyle={{ color: '#4DFF00' }} onClick={this.burgerToggle} exact to='/'>Home</NavLink></li>
								<li><NavLink activeStyle={{ color: '#4DFF00' }} onClick={this.burgerToggle} to='/services'>Services</NavLink></li>
								<li><NavLink activeStyle={{ color: '#4DFF00' }} onClick={this.burgerToggle} to='/about'>About</NavLink></li>
								<li><NavLink activeStyle={{ color: '#4DFF00' }} onClick={this.burgerToggle} to='/news'>News</NavLink></li>
								<li><NavLink activeStyle={{ color: '#4DFF00' }} onClick={this.burgerToggle} to='/contact'>Contact</NavLink></li>
							</ul>
						</nav>
					</nav>


					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} />} />
						<Route exact path="/services" render={(props) => <Services {...props} />} />
						<Route exact path="/about" render={(props) => <About {...props} />} />
						<Route exact path="/news" render={(props) => <News {...props} />} />
						<Route exact path="/contact" render={(props) => <Contact {...props} />} />
					</Switch>

				</div>
			</Router>
		)
	}
}


export default Routes;
