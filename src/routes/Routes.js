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
	render() {
		return (
			<Router>
				<div className="App">

					<div className="NavBar">
						<div className="top-logo">
							<Link to='/'><img src={logoWhite} className="logo" alt="logo"/></Link>
						</div>

						<div className="menu-pgs">
						<NavLink activeStyle={{ color: '#4DFF00' }} to='/services'>Services</NavLink>
						<NavLink activeStyle={{ color: '#4DFF00' }} to='/about'>About</NavLink>
						<NavLink activeStyle={{ color: '#4DFF00' }} to='/news'>News</NavLink>
						<NavLink activeStyle={{ color: '#4DFF00' }} to='/contact'>Contact</NavLink>
						</div>

					</div>

					<div className="NavBar-mobile">
						<div className="NavBar-menu">
							<Link className="menu-item" to='/services'>Services</Link>
							<Link className="menu-item" to='/about'>About</Link>
							<Link className="menu-item" to='/news'>News</Link>
							<Link className="menu-item" to='/contact'>Contact</Link>
						</div>

						<div className="NavBar-logo">
							<img src={logoWhite} className="logo" alt="logo"/>
						</div>
					</div>

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
