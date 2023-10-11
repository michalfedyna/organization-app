import {jest} from '@jest/globals';
import {configure} from 'reassure';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

configure({testingLibrary: 'react-native'});
