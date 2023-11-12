import React from 'react';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen, WelcomeScreen} from '@screens';

type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type WelcomeScreenRouteProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

export type LoginScreenRouteProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type RegisterScreenRouteProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={WelcomeScreen}
        name="Welcome"
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        component={RegisterScreen}
        name="Register"
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
