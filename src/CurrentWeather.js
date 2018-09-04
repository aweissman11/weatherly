/* current weather */

import React, { Component } from 'react';
import data from './sampleData';

const currentCity = data.current_observation.display_location.full;
const condition = data.current_observation.weather;
const currentDay = data.current_observation.observation_time;
const currentTemp = data.current_observation.temp_f;
const highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit
const lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit
const weatherDescription = data.forecast.txt_forecast.forecastday[0].fcttext;


class CurrentWeather extends Component {
  render() {
    return (
      <div className='current-weather'>
        <p>{currentCity}</p>
        <p>{condition}</p>
        <p>{currentDay}</p>
        <p>Current Temperature: {currentTemp}</p>
        <p>High: {highTemp}, Low: {lowTemp}</p>
        <p>{weatherDescription}</p>
      </div>
    )
  }
}










export default CurrentWeather;
