import React, { Component } from 'react';
// import data from './sampleData';
import Hour from './Hour';

class SevenHour extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='seven-hour'>
        {
          this.props.propsData.data.hourly_forecast.map( (hour, index) => {
            if (index < 7) {
              return <Hour 
                hour={hour.FCTTIME.hour}
                currentTemp={hour.temp.english}
                image={hour.icon_url}
               />
            }
          })
        }
      </div>
    )
  }

}



export default SevenHour;