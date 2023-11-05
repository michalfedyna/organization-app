import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '@navigation/AuthStack';
import MainStack from '@navigation/MainStack';
import {useNavigationTheme} from '@styles/utils';
import {useAppSelector} from '@store/hooks';

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
