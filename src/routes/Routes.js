import React, { PureComponent } from 'react';
import {
	Switch,
	Route, Link,
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
						<Link to='/services'>Services</Link>
						<Link to='/about'>About</Link>
						<Link to='/news'>News</Link>
						<Link to='/contact'>Contact</Link>
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
