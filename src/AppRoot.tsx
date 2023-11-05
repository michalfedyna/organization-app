import React, {FC, PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ErrorBoundary} from 'react-error-boundary';

import {ErrorFallbackScreen} from '@screens';
import {ContextProviders} from '@components';
import {createStyles} from '@styles';

type AppRootProps = PropsWithChildren<{}>;

const styles = createStyles({
  root: {
    flex: 1,
  },
});

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

export default AppRoot;
