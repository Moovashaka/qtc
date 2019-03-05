import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>QTC Limited</h1>
          <p>
            Underwriters to the Motor Trade - Prestige specialists
          </p>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
