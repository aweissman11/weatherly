import React, { Component } from 'react';

export default class Day extends Component {

	render() {

		let thisWeekday = this.props.weekday.toLowerCase();
		let thisCondition = this.props.condition.toLowerCase();

		return (
			<div className='day-div'>
				<p className='date'><span>{thisWeekday}</span> <span>{this.props.month}/</span><span>{this.props.date}/2018</span></p>
				<p className='high'>high: <span>{this.props.high}</span>&deg;f</p>
				<p className='low'>low: <span>{this.props.low}</span>&deg;f</p>
				<p><img alt='weather-condition' className='day-img' src={this.props.image}/></p>
				<p className='day-condition'>condition: <span>{thisCondition}</span></p>
			</div>
		);
	}
}