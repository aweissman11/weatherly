import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import WelcomeCard from './WelcomeCard';
import TwentyFourHour from './24Hour';


export default class Cards extends Component {
  render() {
    const cardsArray = [  <WelcomeCard />,
                          <CurrentWeather 
                            localStats={this.props.localStats}
                            localForecast={this.props.localForecast}
                          />,
                          <SevenHour  
                            hourlyForecast={this.props.hourlyForecast}
                          />,
                          <TenDay tenDay={this.props.tenDay}/>,
                          <TwentyFourHour
                            hourlyForecast={this.props.hourlyForecast}  
                          />
                        ]

    return (
      <section>
      {
        cardsArray.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
                {card}
              <a href="#"><img src={card.url} /></a>
            </div>
          )
        })
      }
      </section>
    )
  }
}
