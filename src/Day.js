import React, { Component } from 'react';

export default class Day extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className='day-div'>
				<p className='day'>{this.props.weekday}</p>
				<p className='date'>{this.props.date}</p>
				<p className='month'>{this.props.month}</p>
				<p className='high'>{this.props.high}</p>
				<p className='low'>{this.props.low}</p>
				<p className='day-condition'>{this.props.condition}</p>
				<p><img className='day-img' src={this.props.image}/></p>
			</div>
		);
	}
}