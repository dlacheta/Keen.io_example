import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

it('About component renders correctly', () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
});
