import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext);
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setIsLoading(true);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);
  return (
    <View>
      <Text>Router</Text>
    </View>
  );
};

export default Router;
