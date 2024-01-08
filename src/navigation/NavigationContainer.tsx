import AuthStack from './AuthStack';
import MainStack from './MainStack';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@store';
import {useNavigationTheme} from '@styles';

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const userStatus = useAppSelector(state => state.user.userStatus);
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      {userStatus === 'loggedIn' ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
