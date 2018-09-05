import React, { Component } from 'react';
// import data from './sampleData';
import Hour from './Hour';
import './SevenHour.css';

class SevenHour extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='seven-hour'>
        <h1 className='seven-hour-header'>SEVEN HOUR FORECAST</h1>
        {
          this.props.propsData.data.hourly_forecast.map( (hour, index) => {
            if (index < 7) {
              return <Hour 
                hour={hour.FCTTIME.hour}
                currentTemp={hour.temp.english}
                // image={hour.icon_url}
                condition={hour.condition}
                humidity={hour.humidity}
                windchill={hour.windchill.english}
                feelslike={hour.feelslike.english}
                key={index}
               />
            }
          })
        }
      </div>
    )
  }

}



export default SevenHour;