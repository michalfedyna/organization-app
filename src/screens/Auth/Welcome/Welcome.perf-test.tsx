import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';
import WelcomeScreen from '@screens/Auth/Welcome/WelcomeScreen';

test('WelcomeScreen performance test', async () => {
  await measurePerformance(<WelcomeScreen />);
});
