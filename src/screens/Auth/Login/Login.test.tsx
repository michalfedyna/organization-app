import React from 'react';
import {test, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

import LoginScreen from '@screens/Auth/Login/LoginScreen';

test('LoginScreen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
