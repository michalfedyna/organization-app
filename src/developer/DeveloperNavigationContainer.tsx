import DesignScreen from './DesignScreen';
import ThemeScreen from './ThemeScreen';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigationTheme} from '@styles';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator>
        <Drawer.Screen
          component={DesignScreen}
          name="developer/design"
          options={{
            title: 'Design',
          }}
        />
        <Drawer.Screen
          component={ThemeScreen}
          name={'developer/theme'}
          options={{title: 'Theme'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
