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
            <form>
              <label>Your name: <input id="name" /></label>
              <label>Your email: <input id="email" /></label>
      
              <label>Message: <textarea id="email" /></label>
              
            </form>

          </div>
    </div>
    <div className="footer">
      <p>ZED VISION 2019</p>
                        
    </div>

</div>  
      </PageLayout>

      <PageLayout isDark={true} >
         <div className="Home-header">

            <div className="Menu">
                  <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="Content">
              <h1>Your vision<br />Our Solution</h1>
              <div className="Divider"> </div>
              <p>Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum</p>
                                
            </div>

         </div>
      </PageLayout>
      

  
      

      <PageLayout isDark={true}>
          Harmadik oldal
      </PageLayout>
      

      <PageLayout>
          Hey Istvan
      </PageLayout>
      
        <header className="App-header">
        
          
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
