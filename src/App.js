//API Key: f9460b57fa291959

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import data from './sampleData';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    const propsData = {data};

    return (
      <div className="App">
        <CurrentWeather/>
        <SevenHour  propsData={propsData}/>
      </div>
    );
  }
}

export default App;



        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
