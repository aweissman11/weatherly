import React, { Component } from 'react';

export default class Day extends Component {
	// constructor() {
	// 	super()
	// }

	render() {
		return (
			<div className='day-div'>
				<p className='date'>Day: <span>{this.props.weekday}</span> <span>{this.props.month}/</span><span>{this.props.date}</span></p>
				<p className='high'>High: <span>{this.props.high}</span></p>
				<p className='low'>Low: <span>{this.props.low}</span></p>
				<p><img alt='weather-condition' className='day-img' src={this.props.image}/></p>
				<p className='day-condition'>Condition: <span>{this.props.condition}</span></p>
			</div>
		);
	}
}