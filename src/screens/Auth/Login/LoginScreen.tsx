import React from 'react';

import {Column, Screen, Text} from '@components';
import {LoginScreenRouteProp} from '@navigation';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenRouteProp>();

  return (
    <Screen withTopBar goBack={() => navigation.goBack()}>
      <Column style={{flex: 1, justify: 'center'}}>
        <Text style={{fontSize: 'jumbo'}}>Login</Text>
      </Column>
    </Screen>
  );
};

export default LoginScreen;
