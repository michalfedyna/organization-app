import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DesignScreen from '@developer/DesignScreen';
import ThemeScreen from '@developer/ThemeScreen';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
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
