import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import Providers from '@components/Providers';
import Navigation from '@navigation/NavigationContainer';
import DeveloperNavigation from '@developer/DeveloperNavigationContainer';

import ErrorFallbackScreen from '@screens/ErrorFallback/ErrorFallbackScreen';

import useDeveloperMode from '@developer/useDeveloperMode';

import Logger from '@utils/Logger';

if (__DEV__) {
  Logger.getLogger().enable();
}

const App = () => {
  const isDeveloperMode = useDeveloperMode();

  return (
    <ErrorBoundary fallback={<ErrorFallbackScreen />}>
      <Providers>
        {isDeveloperMode ? <DeveloperNavigation /> : <Navigation />}
      </Providers>
    </ErrorBoundary>
  );
};

export default App;
