import ErrorFallbackScreen from './ErrorFallbackScreen';
import React from 'react';
import {measurePerformance} from 'reassure';

import {test} from '@jest/globals';

test('ErrorFallbackScreen performance test', async () => {
  await measurePerformance(<ErrorFallbackScreen />);
});
