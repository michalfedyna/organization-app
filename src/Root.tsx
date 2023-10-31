import React, {FC, PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ErrorBoundary} from 'react-error-boundary';

import ErrorFallbackScreen from '@screens/ErrorFallback/ErrorFallbackScreen';
import Providers from '@components/Providers';

import {createStyles} from '@styles/utils';

type RootProps = PropsWithChildren<{}>;

const styles = createStyles({
  root: {
    flex: 1,
  },
});

const Root: FC<RootProps> = ({children}) => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Providers>
        <ErrorBoundary fallback={<ErrorFallbackScreen />}>
          {children}
        </ErrorBoundary>
      </Providers>
    </GestureHandlerRootView>
  );
};

export default Root;
