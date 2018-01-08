import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';

// Oh man i'd really suggest switching to 2-space soft tabs.
class Cube extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="buttons-wrapper">
                {/* Use className="" instead of class */}
                <input id="slide1" type="radio" name="slider" checked />
                <input id="slide2" type="radio" name="slider" />
                <input id="slide3" type="radio" name="slider" />
                <input id="slide4" type="radio" name="slider" />

                <ul className="slider">
                    <li>
                        <div className="caption">
                            <h3>INNOVATION</h3>
                            <p>
                            starts from the top
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="caption">
                            <h3>INTEGRITY</h3>
                            <p>
                            starts from the top
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="caption">
                            <h3>EXCELLENCE</h3>
                            <p>
                            starts from the top
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="caption">
                            <h3>COMMITMENT</h3>
                            <p>
                            starts from the top
                            </p>
                        </div>
                    </li>
                </ul>

                {
                  /* These should actually be react-router <Link> to render other pages
                   * This way, when visiting a route, you'd have that page active,
                   * therefore the state would show the active page.
                   * You would use react-router active to determine which page is
                   * currently being shown.
                   * Also, when using label, you should use htmlFor in react.
                   * This takes the place of the regular HTML for="" and works the same.
                  */
                }
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>
                <label htmlFor="slide4"></label>

            </div>
        )
    }
}

export default Cube;
