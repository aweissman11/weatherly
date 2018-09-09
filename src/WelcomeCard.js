import React, { Component } from 'react';

export default class WelcomeCard extends Component {
	// constructor() {
	// 	super();

	// }

	render() {
		return (
			<div className='welcome'>
				<h1>WELCOME TO THE WEATHER</h1>
				<input 
					type='text' 
					placeholder='Enter a city/state or zip code'
				/>
				<br />
				<button>Show Me the Weather!</button>
			</div>
		);
	}
}

