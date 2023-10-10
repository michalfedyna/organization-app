import React from 'react';
import {test, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

import WelcomeScreen from '@screens/Auth/Welcome/WelcomeScreen';

test('WelcomeScreen renders correctly', () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
