import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';

import LoginScreen from './LoginScreen';

test('LoginScreen performance test', async () => {
  await measurePerformance(<LoginScreen />);
});
