import React, { Component } from 'react';
import './Hour.css';

class Hour extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props)

    return (
      <div className='hour-div'>
        <p className='hour'>Hour: <span>{this.props.hour}</span></p>
        <p className='current-temp'>Current Temp: <span>{this.props.currentTemp}</span></p>
        {/*<p>image: <span>{this.props.image}</span></p>*/}
        <p className='condition'>Condition: <span>{this.props.condition}</span></p>
        <p className='humidity'>Humidity: <span>{this.props.humidity}</span></p>
        <p className='windchill'>Windchill: <span>{this.props.windchill}</span></p>
        <p className='feelslike'>Feels Like: <span>{this.props.feelslike}</span></p>
      </div>
    )
  }
}

export default Hour;

//                       period={hour.FCTTIME.civil}
//                       currentTemp={hour.temp.english}
//                       image={hour.icon}
//                     />


// {props.propsData.FCTTIME.civil}
//          <span>{props.propsData.hour.temp.english}</span>
//          <span>{props.propsData.icon}</span>