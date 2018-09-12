import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';
// import Hour from './Hour';

import data from './sampleData';


describe('SevenHour', () => {

  const props = {
    hourlyForecast: data.hourly_forecast,


  }

	let wrapper;

	beforeEach(() => {
		wrapper = mount(<SevenHour {...props} />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should render 7 hours, no more, no less', () => {
    expect(wrapper.render().children().length).toEqual(8);
  });

})