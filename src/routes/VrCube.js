import React, { Component } from 'react';
import '../styles/Routes.css';

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';

import testSky from '../assets/pano_01.png';
import testFloor from '../assets/floor.png';


class Cube extends Component {
  constructor(props) {
    super(props);
}

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src={testFloor}/>
          <img id="skyTexture" src={testSky}/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        {/* <Entity text={{value: 'STARTS FROM THE TOP', align: 'center'}} position={{x: 0, y: 1.6, z: -.8}}/>
        <Entity text={{value: 'GUTIER', align: 'center'}} position={{x: 0, y: 1.626, z: -.242}}/> */}

        {/* <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity> */}
      </Scene>
    );
  }
}

export default Cube;
