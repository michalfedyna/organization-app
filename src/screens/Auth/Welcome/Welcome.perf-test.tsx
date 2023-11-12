import WelcomeScreen from './WelcomeScreen';
import React from 'react';
import {measurePerformance} from 'reassure';

import {test} from '@jest/globals';

test('WelcomeScreen performance test', async () => {
  await measurePerformance(<WelcomeScreen />);
});
