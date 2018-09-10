import React from 'react';
import { shallow, mount } from 'enzyme';
import Day from './Day';

describe('Day', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Day />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

	it('should render the Day\'s date', () => {
		expect(wrapper.find('.date').length).toEqual(1);
	});

	it('should render the Day\'s high', () => {
		expect(wrapper.find('.high').length).toEqual(1);
	});

	it('should render the Day\'s low', () => {
		expect(wrapper.find('.low').length).toEqual(1);
	});	

	it('should render the Day\'s condition', () => {
		expect(wrapper.find('.day-condition').length).toEqual(1);
	});

});