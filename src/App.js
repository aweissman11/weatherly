//API Key: f9460b57fa291959

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CurrentWeather />
        <SevenHour />
      </div>
    );
  }
}

export default App;
