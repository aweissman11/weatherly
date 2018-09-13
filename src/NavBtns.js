import React, { Component } from 'react';

export default class NavBtns extends Component {

  render() {
    const { currentCard } = this.props
    const btnTitleArray = ['search',
                           'current weather',
                           '7 hour forecast',
                           '10 day forecast',
                           '24 hour forecast'
                           ]

    return (
      <ul className='nav-btns' key={Date.now()}>
        {
          btnTitleArray.map( (btn, i) => {
            if (i === currentCard) {
              return (
                <li 
                  key={i} 
                  className='current-nav-btn'
                  onClick={ () => this.props.setCard(i, (i * -100)) }  
                >
                    {btn}
                </li>
              )
            } else {
              return (
                <li 
                  key={i} 
                  className='nav-btn'
                  onClick={ () => this.props.setCard(i, (i * -100)) }  
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

















