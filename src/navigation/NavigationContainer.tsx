import AuthStack from './AuthStack';
import MainStack from './MainStack';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@store';
import {useNavigationTheme} from '@styles';

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
