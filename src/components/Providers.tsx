import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from '@styles/provider';

import {store} from '@store/store';

type ProvidersProps = React.PropsWithChildren & {};

const Providers: React.FunctionComponent<ProvidersProps> = ({children}) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
