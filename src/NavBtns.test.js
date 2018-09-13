import React from 'react';
import { shallow, mount } from 'enzyme';

import NavBtns from './NavBtns';
import data from './sampleData';


describe('NavBtns', () => {

  const setCardFn = jest.fn();

  const props = {
    cardStyle: {
        transform: 'translateX(0px)'
      },
    localStats: data.current_observation,
    localForecast: data.forecast,
    hourlyForecast: data.hourly_forecast,
    tenDay: data.forecast.simpleforecast,
    currentCard: 0,
    position: 0,
    setCard: setCardFn,
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBtns  {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('there should be 5 buttons, no more, no less', () => {
    expect(wrapper.render().children().length).toEqual(5);
  });

  it('should setCard on click', () => {
    const navBtn = wrapper.find('.current-nav-btn').first();
    navBtn.simulate('click');
    expect(wrapper.instance().props.setCard).toHaveBeenCalled()
    expect(wrapper.instance().props.setCard).toHaveBeenCalledTimes(1)
  })

});