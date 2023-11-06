import React from 'react';

import {Row, Button, Screen, Text, Column, Container} from '@components';

const WelcomeScreen = () => {
  return (
    <Screen>
      <Text fontSize="jumbo" margin="small" marginBottom="large">
        Hello
      </Text>
      <Text>World</Text>
    </Screen>
  );
};

export default WelcomeScreen;
