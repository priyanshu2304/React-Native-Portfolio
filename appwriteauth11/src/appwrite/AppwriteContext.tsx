import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren, createContext, useState} from 'react';

import Appwrite from './service';

type AppContectType = {
  appwrite: Appwrite;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContectType>({
  appwrite: new Appwrite(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const defaultValue = {
    appwrite: new Appwrite(),
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteContext;

const styles = StyleSheet.create({});
