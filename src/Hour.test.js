import React from 'react';
import { shallow, mount } from 'enzyme';
import Hour from './Hour';

describe('Hour', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Hour />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

	it('should render the Hour\'s time', () => {
		expect(wrapper.find('.hour').length).toEqual(1);
	});

	it('should render the Hour\'s current temperature', () => {
		expect(wrapper.find('.current-temp').length).toEqual(1);
	});

	it('should have a state of showInfo set to false', () => {
		expect(wrapper.state()).toEqual({showInfo: false})
	})

	it('should toggle the Hour\'s state of showInfo', () => {
		wrapper.instance().toggleInfo();
		expect(wrapper.state()).toEqual({showInfo: true})
	})

	it('should render the Hour\'s condition', () => {
		wrapper.instance().toggleInfo();
		expect(wrapper.find('.hour-condition').length).toEqual(1);
	});

	it('should render the Hour\'s humidity', () => {
		wrapper.instance().toggleInfo();
		expect(wrapper.find('.humidity').length).toEqual(1);
	});

	it('should render the Hour\'s windchill', () => {
		wrapper.instance().toggleInfo();
		expect(wrapper.find('.windchill').length).toEqual(1);
	});

	it('should render the Hour\'s feels like temperature', () => {
		wrapper.instance().toggleInfo();		
		expect(wrapper.find('.feelslike').length).toEqual(1);
	});

})