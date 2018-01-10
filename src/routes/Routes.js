import React, { PureComponent } from 'react';
import {
	Switch,
	Route, Link,
	BrowserRouter as Router,
} from 'react-router-dom';
import logo from '../assets/logo.png';
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
							<Link to='/'><img src={logo} className="logo" alt="logo"/></Link>
						</div>

						<Link to='/services'>Services</Link>
						<Link to='/about'>About</Link>
						<Link to='/news'>News</Link>
						<Link to='/contact'>Contact</Link>
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

// was thinking something like this to just basically just say 'isActive'
// whenever that route is loaded show page/cube face active for that route.

// export default (
//   <Route component={AppLayout} path="/">
//     <IndexRoute component={Home} />
//
//     { /* Pages */ }
//     <Route component={Page} path="/services" />
//     <Route component={Page} path="/about" />
//     <Route component={Page} path="/contact" />
//     <Route component={Page} path="/news" />
//   </Route>
// );
