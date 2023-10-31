import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DesignScreen from '@developer/DesignScreen';
import ThemeScreen from '@developer/ThemeScreen';
import {useTheme} from '@styles/utils';

const Drawer = createDrawerNavigator();

const Navigation = () => {
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
      <Drawer.Navigator>
        <Drawer.Screen
          name="developer/design"
          component={DesignScreen}
          options={{
            title: 'Design',
          }}
        />
        <Drawer.Screen
          name={'developer/theme'}
          component={ThemeScreen}
          options={{title: 'Theme'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
