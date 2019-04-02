import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageLayout from './components/PageLayout';

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


        <PageLayout isDark={true} >
          <div className="Home-header">

            <div className="Menu">
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="Content">
              <h1>Your vision<br />Our Solution</h1>
              <div className="Divider"> </div>
              <p>We are going to help you and your business to change for the better.</p>
              <p>We are offering IT and API solutions.</p>
              <p>Get know more, contact us!</p>
            </div>

          </div>
        </PageLayout>





        <PageLayout isDark={true}>
          <div className="Contact-us">

            <div className="Contact-us-container">
              <div className="Contact-us-item">
                <h2>Contact us</h2>
                <p>Don't be shy! Drop us an e-mail and say Hello!</p>

                <div className="Social-contact"></div>
                <p>e-mail</p>
                <p>twitter</p>
                <p>github</p>
                <p>linkedin</p>

              </div>
              <div className="Contact-us-item">
                <h2>Message us</h2>
                <div className="form">
                <form>
                  <label>Your name: <input id="name" /></label>
                  <p><label>Your email: <input id="email" /></label></p>

                  <label>Message: <textarea id="email" /></label>

                </form>
</div>
              </div>
            </div>
            <div className="footer">
              <p>ZED VISION 2019</p>

            </div>

          </div> 
            </PageLayout>    
      </div>
    );
  }
}

export default App;
