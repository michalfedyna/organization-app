import React from 'react';

import {
  Button,
  Column,
  Divider,
  Row,
  Screen,
  Text,
  TextVariants,
} from '@components';
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
      <Column flex={1} mainAxis="center">
        <Column crossAxis="center">
          <Text
            translation="screen.welcome.header"
            variant={TextVariants.Jumbo}
          />
          <Text translation="screen.welcome.paragraph" />
        </Column>
        <Column crossAxis="center">
          <Text translation="screen.welcome.login" />
          <Row>
            <Button icon="Apple" onPress={onApplePress} />
            <Button icon="Facebook" onPress={onFacebookPress} />
            <Button icon="Google" onPress={onGooglePress} />
          </Row>
          <Divider translation="screen.welcome.divider" />
          <Row>
            <Button translation="button.login" onPress={onLoginPress} />
            <Button
              icon="ArrowRight"
              iconPosition="trailing"
              translation="button.register"
              onPress={onRegisterPress}
            />
          </Row>
        </Column>
      </Column>
    </Screen>
  );
};

export default WelcomeView;
