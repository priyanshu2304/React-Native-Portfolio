import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';

export type AppStackParamList = {
  Home: undefined;
  Category: undefined;
  Logout: undefined;
};

type tabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
};

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStack = () => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);
  const tabBarOptions: tabBarOptions = {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  };

  const handleLogout = () => {
    // appwrite.logout().then(() => {
    //   setIsLoggedIn(false);
    //   Snackbar.show({
    //     text: 'Logout Successful',
    //     duration: Snackbar.LENGTH_SHORT,
    //   });
    // });
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="assistive-listening-systems"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        listeners={{
          tabPress: e => {
            e.preventDefault();
            handleLogout();
          },
        }}
        component={EmptyComponent}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="sign-out" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const EmptyComponent = () => {
  return null;
};

export default AppStack;
