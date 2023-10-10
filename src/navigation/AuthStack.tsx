import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="auth/welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthStack;
