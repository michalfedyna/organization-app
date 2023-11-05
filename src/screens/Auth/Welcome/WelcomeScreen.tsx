import React from 'react';

import {Screen, Text} from '@components';

const WelcomeScreen = () => {
  return (
    <Screen>
      <Text withTranslation="authScreen.title" spacing="large" />
    </Screen>
  );
};

export default WelcomeScreen;
