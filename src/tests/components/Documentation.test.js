import React from 'react';
import { shallow } from 'enzyme';
import Documentation from '../../components/Documentation';

it('Documentation component renders correctly', () => {
  const wrapper = shallow(<Documentation />);
  expect(wrapper).toMatchSnapshot();
});
