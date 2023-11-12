import LoginScreen from './LoginScreen';
import React from 'react';
import renderer from 'react-test-renderer';

import {expect, test} from '@jest/globals';

test('LoginScreen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
