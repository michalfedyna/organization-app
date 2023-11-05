import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';

import ErrorFallbackScreen from './ErrorFallbackScreen';

test('ErrorFallbackScreen performance test', async () => {
  await measurePerformance(<ErrorFallbackScreen />);
});
