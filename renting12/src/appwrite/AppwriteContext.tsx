import React, {FC, createContext} from 'react';
import Appwrite from './service';
import {PropsWithChildren} from 'react';
import {useState} from 'react';

type AppContextType = {
  appwrite: Appwrite;
  isLoggedIn: boolean;
  cart: any;
  setCart: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

// Create a new instance of Appwrite
const appwriteInstance = new Appwrite();

export const AppwriteContext = createContext<AppContextType>({
  appwrite: appwriteInstance,
  isLoggedIn: false,
  cart: null,
  setCart: () => {},
  setIsLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState();
  const defaultValue = {
    appwrite: appwriteInstance, // Use the same instance for all consumers
    isLoggedIn,
    cart,
    setCart,
    setIsLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default {AppwriteProvider, AppwriteContext};
