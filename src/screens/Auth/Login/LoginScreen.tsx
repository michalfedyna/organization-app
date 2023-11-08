import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Column, Screen, Text} from '@components';
import {LoginScreenRouteProp} from '@navigation';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenRouteProp>();

  return (
    <Screen withTopBar goBack={() => navigation.goBack()}>
      <Column flex justify="center">
        <Text fontSize="jumbo">Login</Text>
      </Column>
    </Screen>
  );
};

export default LoginScreen;
