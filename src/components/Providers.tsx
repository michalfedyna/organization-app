import React from 'react';
import {Provider as StoreProvider} from 'react-redux';

import {ThemeProvider} from '@styles';
import {TranslationProvider} from '@i18n/provider';
import {store} from '@store/store';

type ProvidersProps = React.PropsWithChildren & {};

const Providers: React.FunctionComponent<ProvidersProps> = ({children}) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <TranslationProvider>{children}</TranslationProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
