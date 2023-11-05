import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useNavigationTheme} from '@styles';
import {useAppSelector} from '@store';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
