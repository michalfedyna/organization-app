import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';
import Welcome from '@screens/Welcome/Welcome';

test('Welcome screen performance test', async () => {
  await measurePerformance(<Welcome />);
});
