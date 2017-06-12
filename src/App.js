import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Shuffle from './components/Shuffle.js';
import Jumbotron from './components/Jumbotron.js';

import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="container">

        <Header/>

        <Jumbotron/>
        
        <Shuffle/>
    		
        <Footer/>
        
      </div>
    );
  }
}

export default App;
