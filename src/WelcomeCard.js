import React, { Component } from 'react';

import data from './largest1000cities';

export default class WelcomeCard extends Component {
	constructor() {
		super();


		this.state = {
			recentSearches: [],

		}
	}

	render() {
		const firstTenCities = data.data.slice(0, 10)

		return (
			<div className='welcome'>
				<h1>WELCOME TO THE WEATHER</h1>
				<form className='search-form'>
					<input 
						type='text' 
						placeholder='Enter a city/state or zip code'
					/>
					<br />
					<button>Show Me the Weather!</button>
				</form>
				<button>CURRENT WEATHER</button>
				<select>
					{

						firstTenCities.map( (city, i) => {
							return (
								<option value={city} key={i} >{city}</option>
							)
						})
					}
				</select>
			</div>
		);
	}
}

// get list

// populate suggestions list using complete me
// display that as a drop down list
// 