import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Provider as StoreProvider} from 'react-redux';

import {store} from '@store/store';
import {getTheme} from '@theme/utils';

type ProvidersProps = React.PropsWithChildren & {};

const Providers: React.FunctionComponent<ProvidersProps> = ({children}) => {
  const themeColor = useColorScheme();

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={getTheme(themeColor || 'dark')}>
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
