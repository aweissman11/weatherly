import React from 'react';
import { shallow, mount } from 'enzyme';

import Cards from './Cards';
import data from './sampleData';


describe('Cards', () => {

  const props = {
    cardStyle: {
        transform: 'translateX(0px)'
      },
    localStats: data.current_observation,
    localForecast: data.forecast,
    hourlyForecast: data.hourly_forecast,
    tenDay: data.forecast.simpleforecast,
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cards  {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });


  it('should render 7 hours, no more, no less', () => {
    expect(wrapper.render().children().length).toEqual(5);
  });

});