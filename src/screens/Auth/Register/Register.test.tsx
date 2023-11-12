import RegisterScreen from './RegisterScreen';
import React from 'react';
import renderer from 'react-test-renderer';

import {expect, test} from '@jest/globals';

test('RegisterScreen renders correctly', () => {
  const tree = renderer.create(<RegisterScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
