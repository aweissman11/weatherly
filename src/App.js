import React, { Component } from 'react';

import data from './sampleData';

import './App.css';
import Cards from './Cards';
import NavBtns from './NavBtns';
import apiKey from './Key';

import cityList from './largest1000cities';
import Trie from '@aweissman/trie-autosuggest/lib/trie.js';

let newTrie = new Trie();

class App extends Component {
  constructor() {
    super();

    this.state = {

      localStats: data.current_observation,
      localForecast: data.forecast,
      hourlyForecast: data.hourly_forecast,
      tenDay: data.forecast.simpleforecast,
      newTrie: newTrie,

      // weatherApiData: {},
      // localForecast: {},
      // hourlyForecast: {},
      // tenDay: {},

      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: 'translateX(0px)'
      },
      width: 0,
    };
  }

  componentDidMount() {

    
    let boxWidth = document.getElementsByClassName("card").clientWidth;
    this.setState({ width: boxWidth });


    this.fetchCityWeatherData('autoip');

    this.fetchLocationList()





  }

  fetchLocationList() {

    if (localStorage.getItem('fullCityList')) {
      let fullCityList = JSON.parse(localStorage.getItem('fullCityList'))
      this.setState({
        fullCityList: fullCityList
      })

      let cityList = fullCityList.map( city => city.location)
      
      this.state.newTrie.populate(cityList)
      this.setState({
        newTrie: newTrie
      })

    } else {

      this.setState({
        newTrie: newTrie
      })

      let fullCityList = cityList.cityList.reduce( (fullObj, city) => {
        fullObj.push({
          location: city.toLowerCase(),
          clicks: 0,
          recency: 0
        })
        return fullObj
      }, [])

      this.state.newTrie.populate(cityList.cityList)

      localStorage.setItem('fullCityList', JSON.stringify(fullCityList))
      this.setState({
        fullCityList: fullCityList
      })
    }
  }


  fetchCityWeatherData(location) {
   let jsonLocation = location;

   let fetchCall = (`http://api.wunderground.com/api/${apiKey.apiKey}/conditions/forecast10day/hourly10day/q/${jsonLocation}.json`)

   fetch(fetchCall)
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherApiData: data.forecast,
        localStats: data.current_observation,
        localForecast: data.forecast,
        hourlyForecast: data.hourly_forecast,
        tenDay: data.forecast.simpleforecast,
      })
      })
    .catch( error => {
      console.log(error)
    })
  }

  handleClick(type) {

    const cardNumber = 5; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if(type === 'next') {
      if (currentCard < cardNumber-1) {
        currentCard++;
        position -= (100);
        console.log('current card: ', currentCard)
        console.log('position: ', position)
      } else {

        currentCard = 0;
        position = 0;
      }
    } else if(type === 'prev') {
      if (currentCard > 0) {
        currentCard--;
        position += (100);
      } else {
        currentCard = 4;
        position = -400; 
      }
    }
    this.setCard(currentCard, position);
  }
  
  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}%)`
      }
    })
  }

  render() {

    // console.log(this.state)

    return (
      <div className='App'>
        <figure>
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>

          <Cards 
            cardStyle={this.state.cardStyle} 
            localStats={this.state.localStats}
            localForecast={this.state.localForecast}
            tenDay={this.state.tenDay}
            hourlyForecast={this.state.hourlyForecast}
            fullCityList={this.state.fullCityList}
            newTrie={this.state.newTrie}
          />
          <div className='nav'>
            <NavBtns 
              setCard={this.setCard.bind(this)}
              currentCard={this.state.currentCard}
              position={this.state.position}
            />
          </div>
        </figure>
      </div>
    );
  }
}

export default App;

