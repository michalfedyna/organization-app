import React from 'react';
import {test, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

import ErrorFallbackScreen from './ErrorFallbackScreen';

test('ErrorFallbackScreen renders correctly', () => {
  const tree = renderer.create(<ErrorFallbackScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
