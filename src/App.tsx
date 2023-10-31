import React from 'react';

import Root from './Root';
import Navigation from '@navigation/NavigationContainer';
import DeveloperNavigation from '@developer/DeveloperNavigationContainer';
import useDeveloperMode from '@developer/useDeveloperMode';

import Logger from '@utils/Logger';

if (__DEV__) {
  Logger.getLogger().enable();
}

const App = () => {
  const isDeveloperMode = useDeveloperMode();

  return (
    <Root>{isDeveloperMode ? <DeveloperNavigation /> : <Navigation />}</Root>
  );
};

export default App;
