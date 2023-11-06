import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DesignScreen from './DesignScreen';
import ThemeScreen from './ThemeScreen';
import {useNavigationTheme} from '@styles';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const navigationTheme = useNavigationTheme();

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
