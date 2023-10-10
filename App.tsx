import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Provider as StoreProvider} from 'react-redux';

import Navigation from '@navigation/NavigationContainer';
import {getTheme} from '@theme/utils';
import {store} from '@store/store';

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

const App = () => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default App;
