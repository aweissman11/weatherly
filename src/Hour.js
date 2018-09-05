import React, { Component } from 'react';

class Hour extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props)

    return (
      <div className='hour'>
        <p>Hour: <span>{this.props.hour}</span></p>
        <p>Current Temp: <span>{this.props.currentTemp}</span></p>
        <p>image: <span>{this.props.image}</span></p>
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