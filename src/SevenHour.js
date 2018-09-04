import React, { Component } from 'react';
import data from './sampleData';
import Hour from './Hour';

class SevenHour extends Component {
  render() {
    return (
      <div className='seven-hour'>
        <Hour />
      </div>
    )
  }

}



export default SevenHour;