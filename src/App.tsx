import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
    <GestureHandlerRootView>
      <Providers>
        <ErrorBoundary fallback={<ErrorFallbackScreen />}>
          {isDeveloperMode ? <DeveloperNavigation /> : <Navigation />}
        </ErrorBoundary>
      </Providers>
    </GestureHandlerRootView>
  );
};

export default App;
