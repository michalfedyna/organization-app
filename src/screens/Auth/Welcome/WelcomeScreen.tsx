import React from 'react';

import {Row, Button, Screen, Text, Column} from '@components';

const WelcomeScreen = () => {
  return (
    <Screen>
      <Column color="foreground" padding="large" paddingDirection="horizontal">
        <Text
          withTranslation="authScreen.title"
          fontSize="jumbo"
          fontWeight="bold"
          align="start"
        />
        <Button
          align="end"
          withTranslation="authScreen.title"
          onClick={() => {}}
        />
        <Button withTranslation="authScreen.title" onClick={() => {}} />
      </Column>
    </Screen>
  );
};

export default WelcomeScreen;
