import React, { Component } from 'react';

import Hour from './Hour';

export default class TwentyFourHour extends Component {

	render() {
		return (
			<div className='twentyfour-hour'>
				<h1 className='twentyfour-hour-header'>twenty-four hour forecast</h1>
        <section className='twentyfour-hours-block'>
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
  					}).slice(0, 24)
  				}
        </section>
			</div>
		);
	}
}