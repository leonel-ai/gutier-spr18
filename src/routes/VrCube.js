import React, { Component } from 'react';
import '../styles/Routes.css';

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';

import panImg from '../assets/360.jpg';


class Cube extends Component {

  render () {
    return (
      <Scene>
          <a-sky id="image-360" radius="20" src={panImg} rotation="0 -130 0"></a-sky>
          <a-camera wasd-controls-enabled="false"></a-camera>

        {/* <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/> */}
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        {/* <Entity text={{value: 'STARTS FROM THE TOP', align: 'center'}} position={{x: 0, y: 1.6, z: -.8}}/>
        <Entity text={{value: 'GUTIER', align: 'center'}} position={{x: 0, y: 1.626, z: -.242}}/> */}

      </Scene>
    );
  }
}

export default Cube;
