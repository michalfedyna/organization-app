import ErrorFallbackScreen from './ErrorFallbackScreen';
import React from 'react';
import renderer from 'react-test-renderer';

import {expect, test} from '@jest/globals';

test('ErrorFallbackScreen renders correctly', () => {
  const tree = renderer.create(<ErrorFallbackScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
