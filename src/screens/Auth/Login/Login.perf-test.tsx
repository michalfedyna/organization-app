import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';
import LoginScreen from '@screens/Auth/Login/LoginScreen';

test('LoginScreen performance test', async () => {
  await measurePerformance(<LoginScreen />);
});
