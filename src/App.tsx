import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <ul className="main-nav">
            <li>Features</li>
            <li>Products</li>
            <li>Blog</li>
            <li className="main-nav--featured">Log In</li>
            <li className="main-nav--featured">Sign Up</li>
          </ul>  
          <p>
            zed.vision yeah
          </p>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
