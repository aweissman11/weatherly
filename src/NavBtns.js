import React, { Component } from 'react';


export default class NavBtns extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   currentCard: this.props.currentCard,
  //   //   position: this.props.position
  //   // }
  // }

  // set up function here

  switchCard(currentCard, position) {
    this.props.setCard(currentCard, position);
  }

  render() {
    // Deconstruct state obj here if needed

    const { currentCard } = this.props

    const btnTitleArray = ['Search',
                           'Current Weather',
                           '7 Hour Forecast',
                           '10 Day Forecast',
                           '24 Hour Forecast'
                           ]


    return (
      // Map out the buttons here
      // Bold out whichiver one is current
      <ul className='nav-btns' key={Date.now()}>
        {
          btnTitleArray.map( (btn, i) => {
            if (i === currentCard) {
              return (
                <li 
                  key={i} 
                  className='current-nav-btn'
                  onClick={ () => this.switchCard(i, (i * -100)) }  
                >
                    {btn}
                </li>
              )
            } else {
              return (
                <li 
                  key={i} 
                  className='nav-btn'
                  onClick={ () => this.switchCard(i, (i * -100)) }  
                >
                    {btn}
                </li>
              )
            }
          })
        }
      </ul>
    )
  }
}

















