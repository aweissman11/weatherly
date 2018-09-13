import React from 'react';
import { shallow, mount } from 'enzyme';

import Day from './Day';

describe('Day', () => {

	const props = {
		low: 20,
		high: 60,
		weekday: 'Wed',
		condition: 'cloudy',
		image: 'JK'
	}

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Day  {...props} />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

	it('should render the Day\'s date', () => {
		expect(wrapper.find('.date').length).toEqual(1);
	});

	it('should say what the date is', () => {
	  const date = wrapper.find('.date');
	  expect(date.text()).toEqual("wed //2018");
	})

	it('should render the Day\'s high', () => {
		expect(wrapper.find('.high').length).toEqual(1);
	});

	it('should say what todays high is', () => {
	  const high = wrapper.find('.high');
	  expect(high.text()).toEqual("high: 60°f");
	})

	it('should render the Day\'s low', () => {
		expect(wrapper.find('.low').length).toEqual(1);
	});	

	it('should say what todays low is', () => {
	  const low = wrapper.find('.low');
	  expect(low.text()).toEqual("low: 20°f");
	})

	it('should render the Day\'s condition', () => {
		expect(wrapper.find('.day-condition').length).toEqual(1);
	});

	it('should say what todays condition is', () => {
	  const condition = wrapper.find('.day-condition');
	  expect(condition.text()).toEqual("cloudy");
	})

});