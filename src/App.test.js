import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';
import data from './sampleData';


describe('App', () => {

  let mockEvent
  let mockFetchCityWeatherData
  let mockData
  let mockFetchCall
  let renderedComponent

  beforeEach(() => {
    mockFetchCall = 'autoip'
    mockEvent = { preventDefault: jest.fn() }
    mockFetchCityWeatherData = jest.fn()
    mockData = data.current_observation

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        data: mockData,
      })
    }))
    renderedComponent = shallow(<App 
                                  fetchCityWeatherData={mockFetchCityWeatherData}
                                />)
  })

  let wrapper;
  let setCardFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<App />);
  })


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App setCard={setCardFn}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should move cards on click and then keep moving on the next click', () => {
    const navBtn = wrapper.find('.slider-btn').first();
    navBtn.simulate('click');
    expect(wrapper.instance().state.currentCard).toEqual(4)
    expect(wrapper.instance().state.position).toEqual(-400)
    navBtn.simulate('click');
    expect(wrapper.instance().state.currentCard).toEqual(3)
    expect(wrapper.instance().state.position).toEqual(-300)
    navBtn.simulate('click');
    expect(wrapper.instance().state.currentCard).toEqual(2)
    expect(wrapper.instance().state.position).toEqual(-200)
    navBtn.simulate('click');
    expect(wrapper.instance().state.currentCard).toEqual(1)
    expect(wrapper.instance().state.position).toEqual(-100)
    navBtn.simulate('click');
    expect(wrapper.instance().state.currentCard).toEqual(0)
    expect(wrapper.instance().state.position).toEqual(0)
  });

  it('should fetch the location list Object', () => {
    expect(wrapper.instance().state.fullCityList).toBeDefined()
  });



  // it('calls fetch with the correct data when adding a new grocery', () => {
  //   const expectedFetchBody = {
  //     method: 'POST',
  //     body: JSON.stringify({ data: mockData }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   renderedComponent.setState({ data: mockData })
  //   renderedComponent.instance().fetchCityWeatherData('nothing')


  //   let expectedOutcome = (["http://api.wunderground.com/api/f9460b57fa291959/conditions/forecast10day/hourly10day/q/http://api.wunderground.com/api/f9460b57fa291959/conditions/forecast10day/hourly10day/q/autoip.json.json"])
  //   let expectedOutcomeTwo = (["http://api.wunderground.com/api/f9460b57fa291959/conditions/forecast10day/hourly10day/q/autoip.json"])
  //   let expectedOutcomeThree = (["http://api.wunderground.com/api/f9460b57fa291959/conditions/forecast10day/hourly10day/q/autoip.json"])

  //   expect(window.fetch).toHaveBeenCalledWith(expectedOutcome, expectedOutcomeTwo, expectedOutcomeThree)

  // });

  // it('sets an error when the fetch fails', () => {
  // })



})
