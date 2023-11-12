import HomeScreen from './HomeScreen';
import React from 'react';
import {measurePerformance} from 'reassure';

import {test} from '@jest/globals';

test('HomeScreen performance test', async () => {
  await measurePerformance(<HomeScreen />);
});
