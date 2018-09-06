//API Key: f9460b57fa291959

import React, { Component } from 'react';

import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import data from './sampleData';
import WelcomeCard from './WelcomeCard';
import TwentyFourHour from './24Hour';


class App extends Component {
  constructor() {
    super();

    this.state = {
      localStats: data.current_observation,
      localForecast: data.forecast,
      hourlyForecast: data.hourly_forecast,
      tenDay: data.forecast.simpleforecast
    }
  }

  render() {
    const propsData = {data};

    return (
      <div className="App">
        <WelcomeCard />
        <CurrentWeather 
          localStats={this.state.localStats}
          localForecast={this.state.localForecast}
        />
        <SevenHour  
          hourlyForecast={this.state.hourlyForecast}
        />
        <TenDay tenDay={this.state.tenDay}/>
        <TwentyFourHour
          hourlyForecast={this.state.hourlyForecast}
        />
      </div>
    );
  }
}

export default App;



        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
