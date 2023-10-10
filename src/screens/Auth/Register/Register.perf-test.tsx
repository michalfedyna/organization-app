import React from 'react';
import {test} from '@jest/globals';
import {measurePerformance} from 'reassure';
import RegisterScreen from '@screens/Auth/Register/RegisterScreen';

test('RegisterScreen performance test', async () => {
  await measurePerformance(<RegisterScreen />);
});
