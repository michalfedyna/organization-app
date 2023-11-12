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
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={ToolsScreen} name="Tools" />
    </Tab.Navigator>
  );
};

export default MainStack;
