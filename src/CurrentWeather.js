import React, { Component } from 'react';

class CurrentWeather extends Component {

  render() {
    return (
      <div className='current-weather'>
        <h1 className='current-header'>current weather</h1>
        <h2>in</h2>
        <div className='current-div'>
          <p className='current-location'>{this.props.localStats.display_location.full}</p>
          <p className='current-update'>{this.props.localStats.observation_time}</p>
          <p>condition:</p>
          <p className='current-condition'>{this.props.localStats.weather}</p>
          <p className='current-temp'>temp: {this.props.localStats.temp_f}&deg;f</p>
          <p className='current-high'>today's high: {this.props.localForecast.simpleforecast.forecastday[0].high.fahrenheit}&deg;f</p>
          <p className='current-low'>today's low: {this.props.localForecast.simpleforecast.forecastday[0].low.fahrenheit}&deg;f</p>
          <p>summary: </p>
          <p className='current-summary'>{this.props.localForecast.txt_forecast.forecastday[0].fcttext}</p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
