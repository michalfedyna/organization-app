import React from 'react';

import {Button, Column, Divider, Row, Screen, Text} from '@components';
import {WelcomeScreenRouteProp} from '@navigation';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenRouteProp>();

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  const onApplePress = () => {};

  const onFacebookPress = () => {};

  const onGooglePress = () => {};

  return (
    <Screen>
      <Column flex justify="space-evenly">
        <Column>
          <Text fontSize="jumbo">Welcome!</Text>
          <Text>Let's get started.</Text>
        </Column>
        <Column>
          <Text marginVertical="medium" textAlign="center" width="50%">
            Login using your social media account
          </Text>
          <Row gap="large" justify="center">
            <Button
              fontColor="apple"
              fontSize="jumbo"
              icon="Apple"
              iconPosition="leading"
              onPress={onApplePress}
            />
            <Button
              fontColor="facebook"
              fontSize="jumbo"
              icon="Facebook"
              iconPosition="leading"
              onPress={onFacebookPress}
            />
            <Button
              fontColor="google"
              fontSize="jumbo"
              icon="Google"
              iconPosition="leading"
              onPress={onGooglePress}
            />
          </Row>
          <Divider margin="medium" withTranslation="divider.useEmail" />
          <Row gap="large" justify="center">
            <Button
              fontColor="text"
              paddingHorizontal="medium"
              paddingVertical="small"
              withTranslation="button.login"
              onPress={onLoginPress}
            />
            <Button
              backgroundColor="accent"
              fontColor="textInverted"
              icon="ArrowRight"
              iconPosition="trailing"
              paddingHorizontal="medium"
              paddingVertical="small"
              withTranslation="button.register"
              onPress={onRegisterPress}
            />
          </Row>
        </Column>
      </Column>
    </Screen>
  );
};

export default WelcomeScreen;
