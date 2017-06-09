import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Shuffle from './components/Shuffle.js';

import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="container">

        <Header/>

        <div className="jumbotron"><h1>test</h1></div>
        
        <Shuffle/>
    		
        <Footer/>
        
      </div>
    );
  }
}

export default App;
