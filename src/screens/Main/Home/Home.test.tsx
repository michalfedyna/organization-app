import HomeScreen from './HomeScreen';
import React from 'react';
import renderer from 'react-test-renderer';

import {expect, test} from '@jest/globals';

test('HomeScreen renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
