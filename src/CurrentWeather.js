/* current weather */

import React, { Component } from 'react';
import data from './sampleData';


// const currentCity = data.current_observation.display_location.full;
// const condition = data.current_observation.weather;
// const currentDay = data.current_observation.observation_time;
// const currentTemp = data.current_observation.temp_f;
// const highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit
// const lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit
// const weatherDescription = data.forecast.txt_forecast.forecastday[0].fcttext;


class CurrentWeather extends Component {
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
      </div>
    )
  }
}










export default CurrentWeather;
