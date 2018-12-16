import React from 'react';
import { shallow } from 'enzyme';
import Info from '../../components/Info';

it('Info component renders correctly', () => {
  const wrapper = shallow(<Info />);
  expect(wrapper).toMatchSnapshot();
});
