import React from 'react';

import {Row, Button, Screen, Text, Column} from '@components';

const WelcomeScreen = () => {
  return (
    <Screen>
      <Column flex justify="center">
        <Text fontSize="jumbo">Welcome!</Text>
        <Text>Let's get started.</Text>
        <Row justify="center" paddingVertical="large">
          <Button
            paddingVertical="small"
            paddingHorizontal="medium"
            fontColor="text">
            Sign In
          </Button>
          <Button
            icon="ArrowRight"
            iconPosition="trailing"
            paddingHorizontal="medium"
            paddingVertical="small"
            backgroundColor="accent"
            fontColor="textInverted">
            Sign Up
          </Button>
        </Row>
      </Column>
    </Screen>
  );
};

export default WelcomeScreen;
