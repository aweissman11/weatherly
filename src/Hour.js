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
        <p className='hour'>time: <span>{this.props.hour}</span>:00</p>
        <p className='current-temp'><span>{this.props.currentTemp}</span>&deg;f</p>
        <p><img alt='weather-condition' src={this.props.image}></img></p>
        {
          this.state.showInfo &&
            <div className='xtra-info'>
              <p className='hour-condition'>condition: <span>{this.props.condition}</span></p>
              <p className='humidity'>humidity: <span>{this.props.humidity}</span></p>
              <p className='feelslike'>feels like: <span>{this.props.feelslike}</span>&deg;f</p>
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