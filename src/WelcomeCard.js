import React, { Component } from 'react';

import cityList from './largest1000cities';


export default class WelcomeCard extends Component {
	constructor() {
		super();

		this.state = {
			recentSearches: [],
			value: ''
		}
		this.changeValue = this.changeValue.bind(this);
		this.enterValue = this.enterValue.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
	}

	changeValue(event) {
		console.log(event.target.value)
		event.preventDefault();
		this.setState( { value: event.target.value } )
		this.suggestCities(event.target.value)
	}

	enterValue(event) {
		event.preventDefault()
		this.setState( { value: event.target.value } )
		this.props.parseUserEntry(this.state.value);
	}

	suggestCities(event) {
		// console.log(this.props.newTrie.suggest(event))

		this.setState({recentSearches: this.props.newTrie.suggest(event)})
		

	}

	render() {
		// let entry = this.state.value
		const firstTenCities = cityList.cityList.slice(0, 10)

		// console.log(this.state.recentSearches);

		return (
			<div className='welcome'>
				<h1>WELCOME TO THE WEATHER</h1>
				<form className='search-form' onSubmit={ this.handleSubmit }>
					<input 
						list='searches'
						type='text' 
						placeholder='Enter a city/state or zip code'
						onKeyUp={ this.changeValue }
					/>
					<datalist id='searches'>
						{
							this.state.recentSearches.map( (search, i) => {
								return (
									<option
										onClick={ this.enterValue} 
										key={i} 
										value={search}
										>
											{search}
									</option> 
								)
							}).slice(0, 10)		
						}
					</datalist>
					<br />
					<button onClick={ this.enterValue }>Show Me the Weather!</button>
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


// populate suggestions list using complete me
	//will need to use populate method to fill with thousand cities
	//then will need to apply autocomplete array (maybe with an added clicked on counter in an obj?)
	//will then put that in dropdown as user is typing
// A click on search should:
	// store searches in local storage
		// display that as a drop down when search input is clicked
		//Maybe only last ten searches or something?
		//Or maybe only last ten are shown in dropdown or recent searches
			//but rest are saved in an object with a counter on how many times they've been clicked
			// potentially also keep recency counter (starts at ten, moves down towards one as more things are searched)
			//then add together total clicks with recency counter for what is displayed at the top
	//navigate to current weather page

//








