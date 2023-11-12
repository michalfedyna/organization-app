import WelcomeScreen from './WelcomeScreen';
import React from 'react';
import renderer from 'react-test-renderer';

import {expect, test} from '@jest/globals';

test('WelcomeScreen renders correctly', () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
