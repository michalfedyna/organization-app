import React from 'react';

import {DeveloperNavigation, useDeveloperMode} from '@developer';
import {Navigation} from '@navigation';

const AppMain = () => {
  const isDeveloperMode = useDeveloperMode();

  if (isDeveloperMode) {
    return <DeveloperNavigation />;
  }

  return <Navigation />;
};

export default AppMain;
