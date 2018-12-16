import React from 'react';
import { shallow } from 'enzyme';
import Pricing from '../../components/Pricing';

it('Pricing component renders correctly', () => {
  const wrapper = shallow(<Pricing />);
  expect(wrapper).toMatchSnapshot();
});
