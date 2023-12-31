import AppMain from './AppMain';
import AppRoot from './AppRoot';
import React from 'react';

import {Logger} from '@utils';

if (__DEV__) {
  Logger.getLogger().enable();
}

const App = () => {
  return (
    <AppRoot>
      <AppMain />
    </AppRoot>
  );
};

export default App;

// TODO yup for validation in forms
// TODO firebase
// TODO add to readme that styling is inspired by swiftui and jetpack compose
// project styling system
// very opinionated about whats is the role of each component and how they should be used
// helper functions for styling and helper props for components
// themeable components and no absolute values
// building blocks for more complex components
// performance considerations?
// TODO better division of colors in theme background, text, etc
// TODO variants for components
// TODO icons for components trailing and leading
