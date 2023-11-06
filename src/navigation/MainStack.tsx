import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ToolsScreen} from '@screens';

type MainStackParamList = {
  Home: undefined;
  Tools: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tools" component={ToolsScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
