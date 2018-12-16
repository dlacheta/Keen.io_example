import React from 'react';
import { shallow } from 'enzyme';
import Company from '../../components/Company';

it('Company component renders correctly', () => {
  const wrapper = shallow(<Company />);
  expect(wrapper).toMatchSnapshot();
});
