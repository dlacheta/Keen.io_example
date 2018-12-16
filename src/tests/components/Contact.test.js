import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../components/Contact';

it('Contact component renders correctly', () => {
  const wrapper = shallow(<Contact />);
  expect(wrapper).toMatchSnapshot();
});
