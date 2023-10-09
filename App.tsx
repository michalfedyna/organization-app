import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import Navigation from '@navigation';
import {getTheme} from '@theme';

type ProvidersProps = React.PropsWithChildren & {};

const Providers: React.FunctionComponent<ProvidersProps> = ({children}) => {
  const themeColor = useColorScheme();

  return (
    <ThemeProvider theme={getTheme(themeColor || 'dark')}>
      {children}
    </ThemeProvider>
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
