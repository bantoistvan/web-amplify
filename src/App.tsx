import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import image1 from './images/thumb-1.jpg';
import image2 from './images/thumb-2.jpg';
import image3 from './images/thumb-3.jpg';
import image4 from './images/thumb-4.jpg';
import image5 from './images/thumb-5.jpg';
import image6 from './images/thumb-6.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <div id="container">
        <ul id="flex-container">
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image1} /></a></li>
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image2} /></a></li>
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image3} /></a></li>
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image4} /></a></li>
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image5} /></a></li>
          <li><a href="#"><div className="magnify"></div><span>Cultura</span><img src={image6} /></a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
