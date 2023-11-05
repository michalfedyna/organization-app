import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen, LoginScreen, RegisterScreen} from '@screens';

type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
