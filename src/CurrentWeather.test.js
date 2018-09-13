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

  it('should say what the current location is', () => {
    const currentLocation = wrapper.find('.current-location');
    expect(currentLocation.text()).toEqual("Louisville, KY")
  })

  it('should render the Current Weather\'s last update', () => {
    expect(wrapper.find('.current-update').length).toEqual(1);
  });

  it('should say when it was last updated', () => {
    const lastUpdate = wrapper.find('.current-update');
    expect(lastUpdate.text()).toEqual("Last Updated on December 20, 11:27 AM EST")
  })

  it('should render the Current Weather\'s condition', () => {
    expect(wrapper.find('.current-condition').length).toEqual(1);
  });

  it('should say what the current condition is', () => {
    const currentCondition = wrapper.find('.current-condition');
    expect(currentCondition.text()).toEqual("Mostly Cloudy")
  })

  it('should render the Current Weather\'s temperature', () => {
    expect(wrapper.find('.current-temp').length).toEqual(1);
  });

  it('should say the current temp', () => {
    const currentTemp = wrapper.find('.current-temp');
    expect(currentTemp.text()).toEqual("temp: 46°f")
  })

  it('should render the Current Weather\'s high for the day', () => {  
    expect(wrapper.find('.current-high').length).toEqual(1);
  });

  it('should display todays high', () => {
    const highTemp = wrapper.find('.current-high');
    expect(highTemp.text()).toEqual("today's high: 51°f")
  })

  it('should render the Current Weather\'s low for the day', () => {  
    expect(wrapper.find('.current-low').length).toEqual(1);
  });

  it('should display todays low', () => {
    const lowTemp = wrapper.find('.current-low');
    expect(lowTemp.text()).toEqual("today's low: 32°f")
  })

  it('should render the Current Weather\'s summary for the day', () => {  
    expect(wrapper.find('.current-summary').length).toEqual(1);
  });

  it('should give a nice summary of todays weather', () => {
    const summary = wrapper.find('.current-summary');
    expect(summary.text()).toEqual("Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.")
  })


});






















