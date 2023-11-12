import LoginScreen from './LoginScreen';
import React from 'react';
import {measurePerformance} from 'reassure';

import {test} from '@jest/globals';

test('LoginScreen performance test', async () => {
  await measurePerformance(<LoginScreen />);
});
