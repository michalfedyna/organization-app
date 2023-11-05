import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';

import HomeScreen from './HomeScreen';

test('HomeScreen performance test', async () => {
  await measurePerformance(<HomeScreen />);
});
