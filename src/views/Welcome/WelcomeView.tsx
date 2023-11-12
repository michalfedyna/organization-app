import React from 'react';

import {Button, Column, Divider, Row, Screen, Text} from '@components';
import {FunctionComponent} from '@types';

export type WelcomeViewProps = {
  onApplePress: () => void;
  onFacebookPress: () => void;
  onGooglePress: () => void;
  onLoginPress: () => void;
  onRegisterPress: () => void;
};

const WelcomeView: FunctionComponent<WelcomeViewProps> = ({
  onApplePress,
  onFacebookPress,
  onGooglePress,
  onLoginPress,
  onRegisterPress,
}) => {
  return (
    <Screen>
      <Column style={{flex: 1, justify: 'space-between'}}>
        <Column style={{marginTop: 'large'}}>
          <Text style={{fontSize: 'jumbo'}}>Welcome!</Text>
          <Text>Let's get started.</Text>
        </Column>
        <Column style={{gap: 'large', marginBottom: 'large'}}>
          <Text
            style={{
              textAlign: 'center',
              width: '50%',
            }}>
            Login using your social media account
          </Text>
          <Row style={{gap: 'large', justify: 'center'}}>
            <Button
              icon="Apple"
              iconPosition="leading"
              style={{fontColor: 'apple', fontSize: 'jumbo'}}
              onPress={onApplePress}
            />
            <Button
              icon="Facebook"
              iconPosition="leading"
              style={{fontColor: 'facebook', fontSize: 'jumbo'}}
              onPress={onFacebookPress}
            />
            <Button
              icon="Google"
              iconPosition="leading"
              style={{fontColor: 'google', fontSize: 'jumbo'}}
              onPress={onGooglePress}
            />
          </Row>
          <Divider withTranslation="divider.useEmail" />
          <Row style={{gap: 'large', justify: 'center'}}>
            <Button
              style={{
                fontColor: 'text',
                paddingHorizontal: 'medium',
                paddingVertical: 'small',
              }}
              withTranslation="button.login"
              onPress={onLoginPress}
            />
            <Button
              icon="ArrowRight"
              iconPosition="trailing"
              style={{
                backgroundColor: 'accent',
                fontColor: 'textInverted',
                paddingHorizontal: 'medium',
                paddingVertical: 'small',
              }}
              withTranslation="button.register"
              onPress={onRegisterPress}
            />
          </Row>
        </Column>
      </Column>
    </Screen>
  );
};

export default WelcomeView;
