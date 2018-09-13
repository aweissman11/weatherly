import React, { Component } from 'react';

import cityList from './largest1000cities';

export default class WelcomeCard extends Component {
	constructor() {
		super();
		
		this.state = {
			autoSuggestion: [],
			value: '',
		}
		this.changeValue = this.changeValue.bind(this);
		this.enterValue = this.enterValue.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	changeValue(event) {
		event.preventDefault();
		this.setState( { value: event.target.value } )
		this.suggestCities(event.target.value)
	}

	enterHereAsValue() {
		this.setState({ value: 'autoapi' })
		this.enterValue('autoapi')
	}

	enterValue(location) {
		let newCityList = this.props.fullCityList.reduce( (newList, city, i) => {
	 		if (city.location === location) {
				city.clicks++;
				city.recency = 10;
			} else {
				if (city.recency > 0) {
					city.recency--;
				}
			}
			return this.props.fullCityList
		}, this.props.fullCityList)

		localStorage.setItem('fullCityList', JSON.stringify(newCityList))
		this.setState( { value: location } )
		this.parseUserEntryHere(location)
		localStorage.setItem('hasVisited', 'visited')
	}

	parseUserEntryHere(entry) {
		this.props.parseUserEntry(entry);
	}

	suggestCities(event) {
		let autoSuggestion = this.props.newTrie.suggest(event)
		let cityObjs = this.props.fullCityList.filter( city => {
			if (autoSuggestion.includes(city.location)) {
				return city;
			}
		})

		let sortedSuggestionObjs = this.sortByKey(cityObjs, ('clicks'), 'recency')

		let finalArr = sortedSuggestionObjs.map( suggestion => {
			return suggestion.location;
		}).slice(0, 10)

		this.setState({autoSuggestion: finalArr})
	}

	sortByKey(array, key, otherKey) {
	    return array.sort(function(a, b) {
	        var x = a[key] + a[otherKey]; var y = b[key] + b[otherKey];
	        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	    });
	}

	render() {
		const firstTenCities = cityList.cityList.slice(0, 10)

		return (
			<div className='welcome'>
				{
					!localStorage.getItem('hasVisited') && <h1 className='welcome-msg'>welcome, to the weather.</h1>
				}
				{
					localStorage.getItem('hasVisited') && <h1 className='welcome-msg2'>i know why you're here. you're looking for the weather.</h1>
				}

				<section className='user-tools'>
					<h2 className='welcome-title'>i know weather</h2>
					<form className='search-form' onSubmit={ this.handleSubmit }>
						<input 
							className='user-input'
							list='searches'
							type='text' 
							placeholder='enter a city/state or zip code'
							onKeyUp={ this.changeValue }
						/>
						<datalist id='searches'>
							{
								this.state.autoSuggestion.map( (search, i) => {
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
						<button 
							className='submit-btn'
							onClick={ this.enterValue }>show me.
						</button>
					</form>
					<section>
						<label 
							htmlFor="recents"
							className='recents-label'
						>recent places:</label>
						<select 
							className='welcome-recents'
							id='recents'
						>
							{
								firstTenCities.map( (city, i) => {
									return (
										<option value={city} key={i} >{city}</option>
									)
								})
							}
						</select>
						<button className='your-location-btn' onClick={ () => this.enterHereAsValue() }>see your weather</button>
					</section>
				</section>
			</div>
		);
	}
}

