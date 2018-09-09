import React, { Component } from 'react';


class Hour extends Component {
  constructor() {
    super();

    this.state = {
      showInfo: false
    }

    this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo() {
      this.setState({
        showInfo: !this.state.showInfo
      })
    }

  render() {
    return (
      <div className='hour-div' onClick={this.toggleInfo}>
        <p className='hour'>Hour: <span>{this.props.hour}</span></p>
        <p className='current-temp'>Current Temp: <span>{this.props.currentTemp}</span></p>
        <p><img alt='weather-condition' src={this.props.image}></img></p>
        {
          this.state.showInfo &&
            <div className='xtra-info'>
              <p className='condition'>Condition: <span>{this.props.condition}</span></p>
              <p className='humidity'>Humidity: <span>{this.props.humidity}</span></p>
              <p className='windchill'>Windchill: <span>{this.props.windchill}</span></p>
              <p className='feelslike'>Feels Like: <span>{this.props.feelslike}</span></p>
            </div>
        }

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