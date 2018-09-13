import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';


describe('App', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    })


    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('fetches data from the API', () => {

    });


})
