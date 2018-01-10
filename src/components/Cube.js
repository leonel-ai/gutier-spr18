import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CubeFace from './CubeFace';
import '../styles/components/cube.css';

const pagesArray = [
  {
    id: 1,
    url: '/',
    name: 'home',
    title: 'Home Page',
    content: 'Welcome Hooooo-oh-oome'
  },
  {
    id: 2,
    url: '/about',
    name: 'about',
    title: 'About Us',
    content: 'Who we are. What we do.'
  },
  {
    id: 3,
    url: '/contact',
    name: 'contact',
    title: 'Contact Us',
    content: 'Contact Us using the form below'
  },
];

class Cube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: '/'
    };
  }

  setPageActive = (e, page) => {
    this.setState({
      activePage: page.url
    });
  }

	render() {
    // this is same as saying: const activePage = this.state.activePage
    const { activePage } = this.state;

    const faces = pagesArray.map(page => {
      // if this pageUrl is activePage, true, else false.
      const isActive = (page.url === activePage);
      // set class to active if active or empty string otherwise.
      const className = (isActive) ? 'active' : '';
      return (
        <CubeFace key={page.id}
                  className={className}
                  content={page.content} />
      );
    });

    const links = pagesArray.map(page => {
      return (
        <Link key={page.id}
              active={page.url === activePage}
              to={page.url} />
      );
    });

		return (
      <div className="cube-wrapper">
        <div className="slider faces-container">
          {faces}
        </div>
      </div>
		)
	}
}

export default Cube;
