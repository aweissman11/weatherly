import React from 'react';
import { shallow, mount } from 'enzyme';
import TwentyFourHour from './24Hour';
// import Hour from './Hour';

import data from './sampleData';


describe('TwentyFourHour', () => {

  const props = {
    hourlyForecast: data.hourly_forecast,


  }

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TwentyFourHour {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should render 24 hours, no more, no less', () => {
    expect(wrapper.render().children()[1].children.length).toEqual(24);
  });

  

})