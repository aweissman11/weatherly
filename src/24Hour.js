import React, { Component } from 'react';

import Hour from './Hour';

export default class TwentyFourHour extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='twentyfour-hour'>
				<h1 className='twentyfour-hour-header'>TWENTY-FOUR HOUR FORECAST</h1>

				{
					this.props.hourlyForecast.map( (hour, index) => {
						return <Hour
						  hour={hour.FCTTIME.hour}
              currentTemp={hour.temp.english}
              image={hour.icon_url}
              condition={hour.condition}
              humidity={hour.humidity}
              windchill={hour.windchill.english}
              feelslike={hour.feelslike.english}
              // key={index}
						/>
					}).slice(0, 24)
				}
			</div>
		);
	}
}