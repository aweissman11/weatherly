import React from 'react';
import { shallow, mount } from 'enzyme';
import Hour from './Hour';

describe('Hour', () => {

	const props = {
		hour: 12,
		currentTemp: 60,
		image: 'JK',
		condition: 'cloudy',
		humidity: -9999,
		feelsLike: 9999
	}

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Hour {...props} />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

	// it('should toggle the Hour\'s state of showInfo', () => {
	// 	expect(wrapper.state()).toEqual({showInfo: true})
	// })

	// it('should have a state of showInfo set to false', () => {
	// 	expect(wrapper.state()).toEqual({showInfo: false})
	// })

	it('should render the Hour\'s time', () => {
		expect(wrapper.find('.hour').length).toEqual(1);
	});

	it('should say what time it is', () => {
	  const hour = wrapper.find('.hour');
	  expect(hour.text()).toEqual("time: 12:00");
	})

	it('should render the Hour\'s current temperature', () => {
		expect(wrapper.find('.current-temp').length).toEqual(1);
	});

	it('should say what the temp is', () => {
	  const currentTemp = wrapper.find('.current-temp');
	  expect(currentTemp.text()).toEqual("60°f");
	})

	it('should render the Hour\'s condition', () => {
		expect(wrapper.find('.hour-condition').length).toEqual(1);
	});

	it('should say what the condition is', () => {
		wrapper.setState( {showInfo: true })
	  const condition = wrapper.find('.hour-condition');
	  expect(condition.text()).toEqual("cloudy");
	})

	it('should render the Hour\'s humidity', () => {
		expect(wrapper.find('.humidity').length).toEqual(1);
	});

	it('should say what time it is', () => {
	  const time = wrapper.find('.humidity');
	  expect(time.text()).toEqual("humidity: -9999%");
	})

	it('should render the Hour\'s feels like temperature', () => {
		expect(wrapper.find('.feelslike').length).toEqual(1);
	});

	it('should say what this hour feels like', () => {
		wrapper.setState( {showInfo: true })
	  const highTemp = wrapper.find('.feelslike');
	  expect(highTemp.text()).toEqual("feels like: °f");
	})

})