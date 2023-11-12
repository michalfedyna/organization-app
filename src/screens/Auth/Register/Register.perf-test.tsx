import RegisterScreen from './RegisterScreen';
import React from 'react';
import {measurePerformance} from 'reassure';

import {test} from '@jest/globals';

test('RegisterScreen performance test', async () => {
  await measurePerformance(<RegisterScreen />);
});
