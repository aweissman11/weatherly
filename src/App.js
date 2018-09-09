import React, { Component } from 'react';

import data from './sampleData';

import './App.css';
import Cards from './Cards';
import NavBtns from './NavBtns';
import apiKey from './Key';


class App extends Component {
  constructor() {
    super();

    this.state = {
      localStats: data.current_observation,
      localForecast: data.forecast,
      hourlyForecast: data.hourly_forecast,
      tenDay: data.forecast.simpleforecast,

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

// UnComment the following function to access the API
// Will need to edit it to interpolate the location as well
    // let fetchCall = (`http://api.wunderground.com/api/${apiKey.apiKey}/conditions/forecast10day/hourly10day/q/CA/San_Francisco.json`)

    // fetch(fetchCall)
    //   .then(data => data.json())
    //   .then(data => {
    //     this.setState({
    //       weatherApiData: data.forecast,
    //       localStats: data.current_observation,
    //       localForecast: data.forecast,
    //       hourlyForecast: data.hourly_forecast,
    //       tenDay: data.forecast.simpleforecast,
    //     })
    //   })
    
    let boxWidth = document.getElementsByClassName("card").clientWidth;
    this.setState({ width: boxWidth });
  }
  
  // click the slider buttons
  handleClick(type) {

    const cardNumber = 5; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if(type === 'next' && currentCard < cardNumber-1) {
      currentCard++;
      position -= (100);
    } else if(type === 'prev' && currentCard > 0) {
      currentCard--;
      position += (100);
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

    console.log('render')

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



        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
