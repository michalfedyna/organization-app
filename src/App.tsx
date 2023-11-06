import React from 'react';

import AppRoot from './AppRoot';
import {Navigation} from '@navigation';
import {DeveloperNavigation, useDeveloperMode} from '@developer';

import {Logger} from '@utils';

if (__DEV__) {
  Logger.getLogger().enable();
}

const App = () => {
  const isDeveloperMode = useDeveloperMode();

  return (
    <AppRoot>
      {isDeveloperMode ? <DeveloperNavigation /> : <Navigation />}
    </AppRoot>
  );
};

export default App;

// TODO yup for validation in forms
// TODO row and column components
// TODO firebase
