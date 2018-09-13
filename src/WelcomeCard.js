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

	enterValue(location) {
		// location.preventDefault()

		//if the entry = an existing location
			//add one to the click count
		// create new location object
			// click count of 1
			// recency of 10

				// console.log('else:', location)

		// let autoSuggestion = this.state.autoSuggestion
		// console.log('recents:', this.state.autoSuggestion)
		// console.log('top:', this.state.topSearches)

		// let topSearches = this.state.topSearches;




		let newCityList = this.props.fullCityList.reduce( (newList, city, i) => {
	 		if (city.location === location) {
				// console.log('entered location:', location)
				// console.log('location:', city.location)
				// topSearches.push(city.location)
				city.clicks++;
				console.log('recency:', city.recency)
				city.recency = 10;
				console.log('recency:', city.recency)
				// console.log('clicks:', city.clicks)

			} else {
				// console.log('else:', location)
				// console.log('else location:', city.location)
				if (city.recency > 0) {
					city.recency--;
				}

			}

			return this.props.fullCityList
		}, this.props.fullCityList)

		localStorage.setItem('fullCityList', JSON.stringify(newCityList))


		// //run recency function

		this.setState( { value: location } )
		this.parseUserEntryHere(location)
	}

	parseUserEntryHere(entry) {
		// console.log('parsing now:', entry)
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

	showTopSearches() {
		console.log(this.props.fullCityList);
		// this.setState({
		// 	topSearches: this.sortByKey(this.props.fullCityList, 'clicks', 'recency'),
		// })
	}

	render() {
		// let entry = this.state.value
		const firstTenCities = cityList.cityList.slice(0, 10)

		if (this.props.fullCityList) {

			// console.log(this.props.fullCityList);
			// topSearches = 
			// console.log( topSearches)
		}



		// console.log(this.state.autoSuggestion);

		return (
			<div className='welcome'>
				{
					localStorage.length === 1 && <h1 className='welcome-msg'>welcome, to the weather.</h1>
				}
				{
					localStorage.length >= 2 && <h1 className='welcome-msg'>i know why you're here. you're looking for the weather.</h1>
				}
				
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
										// onClick={ () => (this.enterValue(this.state.value)) } 
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
						// onClick={ this.enterValue }>show me.
						onClick={ () => (this.enterValue(this.state.value)) }>show me.

					</button>
				</form>
				<button className='your-location-btn'>your location</button>
				<br />
				<select className='welcome-recents'>
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
