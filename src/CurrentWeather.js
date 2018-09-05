/* current weather */

import React, { Component } from 'react';

import data from './sampleData';

class CurrentWeather extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='current-weather'>
        <h1>CURRENT WEATHER</h1>

        <p>{this.props.localStats.display_location.full}</p>
        <p>{this.props.localStats.weather}</p>
        <p>{this.props.localStats.observation_time}</p>
        <p>Current Temperature: {this.props.localStats.temp_f}</p>
        <p>High: {this.props.localForecast.simpleforecast.forecastday[0].high.fahrenheit}, 
          Low: {this.props.localForecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>{this.props.localForecast.txt_forecast.forecastday[0].fcttext}</p>
        <p>High: {this.props.localForecast.simpleforecast.forecastday[0].high.fahrenheit}, Low: {this.props.localForecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>{this.props.localForecast.txt_forecast.forecastday[0].fcttext}</p>

      </div>
    );
  }
}










export default CurrentWeather;
