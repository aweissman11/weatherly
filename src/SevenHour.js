import React, { Component } from 'react';
// import data from './sampleData';
import Hour from './Hour';

class SevenHour extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className='seven-hour'>
        <h1 className='seven-hour-header'>seven hour forecast</h1>
        <section className='seven-hour-block'>
          {
            this.props.hourlyForecast.map( (hour, index) => {
              return <Hour 
                hour={hour.FCTTIME.hour}
                currentTemp={hour.temp.english}
                image={hour.icon_url}
                condition={hour.condition}
                humidity={hour.humidity}
                feelslike={hour.feelslike.english}
                key={index}
               />
            }).slice(0, 7)
          }
        </section>
      </div>
    );
  }

}



export default SevenHour;
