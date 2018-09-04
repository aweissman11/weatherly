import React, { Component } from 'react';
import data from './sampleData';

const period = data.hourly_forecast[0].FCTTIME.civil;
const currentTemp = data.hourly_forecast[0].temp.english;
const image = data.hourly_forecast[0].icon;

class Hour extends Component {
  render() {
    return (
      <div className='hour'>
        <p>Hour: {period}
          <span>{currentTemp}</span>
          <span>{image}</span>
        </p>
      </div>
    )
  }
}

export default Hour;