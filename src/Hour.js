import React, { Component } from 'react';

class Hour extends Component {

  render() {
    return (
      <div className='hour-div'>
        <p className='hour'>time: <span>{this.props.hour}</span>:00</p>
        <p className='current-temp'><span>{this.props.currentTemp}</span>&deg;f</p>
        <p><img alt='weather-condition' src={this.props.image}></img></p>
        <p className='hour-condition'>{this.props.condition}</p>
        <p className='humidity'>humidity: <span>{this.props.humidity}&#37;</span></p>
        <p className='feelslike'>feels like: <span>{this.props.feelslike}</span>&deg;f</p>
      </div>
    )
  }
}

export default Hour;
