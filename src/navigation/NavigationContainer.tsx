import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '@navigation/AuthStack';
import MainStack from '@navigation/MainStack';
import {useTheme} from '@styles/utils';

type NavigationProps = {
  isLoggedIn?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({isLoggedIn = false}) => {
  const {isDark, ...theme} = useTheme();
  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.foreground,
      text: theme.colors.text,
      border: theme.colors.background,
      notification: theme.colors.accent,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
