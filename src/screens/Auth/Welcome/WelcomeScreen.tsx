import React from 'react';

import {WelcomeScreenRouteProp} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {WelcomeView} from '@views';

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
    <WelcomeView
      onApplePress={onApplePress}
      onFacebookPress={onFacebookPress}
      onGooglePress={onGooglePress}
      onLoginPress={onLoginPress}
      onRegisterPress={onRegisterPress}
    />
  );
};

export default WelcomeScreen;
