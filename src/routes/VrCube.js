import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../styles/Routes.css';

import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
// import 'babel-polyfill';
import {Scene} from 'aframe-react';

import panImg from '../assets/360.jpg';


class Cube extends Component {

  render () {
    return (
      <div className="vr-homepage">
        <Helmet>
          <meta charSet="utf-8" />
            <title>Gutier Roofing</title>
            <script src="../../../dist/aframe-master.js"></script>
        </Helmet>

      <Scene>
          <a-sky id="image-360" radius="20" src={panImg} rotation="0 -130 0"></a-sky>
          <a-camera wasd-controls-enabled="false"></a-camera>
      </Scene>
      </div>
    );
  }
}

export default Cube;
