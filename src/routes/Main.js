import React, { Component } from 'react';
import { 
    Switch, 
    Route, Link, 
    BrowserRouter as Router,
} from 'react-router-dom';
import logo from '../assets/logo.png';


import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';


class Routes extends Component {
    render() {        
        return (
             <Router>
                <div className="App">

                        <div className="NavBar">

                            <div className="top-logo">
                                <img src={logo} className="logo" />
                            </div>

                            <Link to='/'>Gutier</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/services'>Services</Link>
                            <a href="https://medium.com/">News</a>
                            <Link to='/contact'>Contact</Link>

                        </div>

                    <Switch>

                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route exact path="/services" render={(props) => <Services {...props} />} />
                    <Route exact path="/contact" render={(props) => <Contact {...props} />} />

                    </Switch>

                </div>

            </Router>
        );
    }
}


export default Routes;