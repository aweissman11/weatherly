import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';
// import Hour from './Hour';

describe('SevenHour', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SevenHour />)
	});

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

})