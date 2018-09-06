import React, { Component } from 'react';

import Day from './Day'

export default class TenDay extends Component {
	constructor() {
		super();

		this.state = {

		}
	}
  render() {
    return (
      <div className='ten-day-forecast'>
        <h1>TEN DAY FORECAST</h1>

				{
					this.props.tenDay.forecastday.map( (day, index) => {
						return <Day
							weekday={day.date.weekday_short}
							date={day.date.day}
							month={day.date.month}
							high={day.high.fahrenheit}
							low={day.low.fahrenheit}
							condition={day.conditions}
							image={day.icon_url}
							key={index}
							/>
					})
				}        
      </div>
      
    )
  }
}