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

  const onApplePress = () => {
    // TODO: Implement Apple login
  };

  const onFacebookPress = () => {
    // TODO: Implement Facebook login
  };

  const onGooglePress = () => {
    // TODO: Implement Google login
  };

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
