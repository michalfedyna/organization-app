import React from 'react';
import {Provider as StoreProvider} from 'react-redux';

import {ThemeProvider} from '@styles';
import {TranslationProvider} from '@i18n';
import {store} from '@store';

type ProvidersProps = React.PropsWithChildren & {};

const ContextProviders: React.FunctionComponent<ProvidersProps> = ({
  children,
}) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <TranslationProvider>{children}</TranslationProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default ContextProviders;
