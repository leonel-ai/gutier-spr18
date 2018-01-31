import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../styles/Routes.css';

import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
// import 'babel-polyfill';
import {Scene} from 'aframe-react';

import panoImg from '../assets/panoCity.jpg';


class Cube extends Component {

  render () {
    return (
      <div className="vr-homepage">
        <Helmet>
          <meta charSet="utf-8" />
            <title>Gutier Roofing</title>
            <script src="../../../dist/aframe-master.js"></script>
            {/* <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script> */}
        </Helmet>

      <Scene>
          <a-sky id="image-360" radius="18" src={panoImg} rotation="0 0 0"></a-sky>
          <a-camera wasd-controls-enabled="false"></a-camera>
      </Scene>
      </div>
    );
  }
}

export default Cube;
