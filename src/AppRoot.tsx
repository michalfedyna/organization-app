import React, {FC, PropsWithChildren} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ContextProviders} from '@components';
import {ErrorFallbackScreen} from '@screens';

type AppRootProps = PropsWithChildren<{}>;

const AppRoot: FC<AppRootProps> = ({children}) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.root}>
        <ContextProviders>
          <ErrorBoundary fallback={<ErrorFallbackScreen />}>
            {children}
          </ErrorBoundary>
        </ContextProviders>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default AppRoot;
