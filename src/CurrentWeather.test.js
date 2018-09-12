import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrentWeather from './CurrentWeather';
import data from './sampleData';


describe('CurrentWeather', () => {

  const props = {
    cardstyle: {
        transform: 'translateX(0px)'
      },
    localStats: data.current_observation,
    localForecast: data.forecast,
    hourlyForecast: data.hourly_forecast,
    tenDay: data.forecast.simpleforecast,
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather  {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should render the Current Weather\'s location', () => {
    expect(wrapper.find('.current-location').length).toEqual(1);
  });

  it('should render the Current Weather\'s last update', () => {
    expect(wrapper.find('.current-update').length).toEqual(1);
  });

  it('should render the Current Weather\'s condition', () => {
    expect(wrapper.find('.current-condition').length).toEqual(1);
  });

  it('should render the Current Weather\'s temperature', () => {
    expect(wrapper.find('.current-temp').length).toEqual(1);
  });

  it('should render the Current Weather\'s high for the day', () => {  
    expect(wrapper.find('.current-high').length).toEqual(1);
  });

  it('should render the Current Weather\'s low for the day', () => {  
    expect(wrapper.find('.current-low').length).toEqual(1);
  });

  it('should render the Current Weather\'s summary for the day', () => {  
    expect(wrapper.find('.current-summary').length).toEqual(1);
  });

});