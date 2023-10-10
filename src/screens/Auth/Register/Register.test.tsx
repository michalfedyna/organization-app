import React from 'react';
import {test, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

import RegisterScreen from '@screens/Auth/Register/RegisterScreen';

test('RegisterScreen renders correctly', () => {
  const tree = renderer.create(<RegisterScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
