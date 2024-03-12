import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Cart from '../screens/Cart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Cart: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default AuthStack;
