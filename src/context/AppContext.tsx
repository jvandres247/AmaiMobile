// context/AppContext.tsx
import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextType = {
  isFirstTime: boolean;
  isLoggedIn: boolean;
  completedOnboarding: boolean;
  setIsFirstTime: (val: boolean) => void;
  setIsLoggedIn: (val: boolean) => void;
  setCompletedOnboarding: (val: boolean) => void;
  initialAuthScreen: string | null;
  setInitialAuthScreen: (val: string | null) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [isFirstTime, setIsFirstTimeState] = useState(true);
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const [initialAuthScreen, setInitialAuthScreen] = useState<string | null>(
    null,
  );
  const [completedOnboarding, setCompletedOnboardingState] = useState(false);

  useEffect(() => {
    (async () => {
      const first = await AsyncStorage.getItem('isFirstTime');
      const login = await AsyncStorage.getItem('isLoggedIn');
      const onboard = await AsyncStorage.getItem('completedOnboarding');

      setIsFirstTimeState(first !== 'false'); // true por default si no existe
      setIsLoggedInState(login === 'true');
      setCompletedOnboardingState(onboard === 'true');
    })();
  }, []);

  const setIsFirstTime = async (val: boolean) => {
    setIsFirstTimeState(val);
    await AsyncStorage.setItem('isFirstTime', val.toString());
  };

  const setIsLoggedIn = async (val: boolean) => {
    setIsLoggedInState(val);
    await AsyncStorage.setItem('isLoggedIn', val.toString());
  };

  const setCompletedOnboarding = async (val: boolean) => {
    setCompletedOnboardingState(val);
    await AsyncStorage.setItem('completedOnboarding', val.toString());
  };

  return (
    <AppContext.Provider
      value={{
        isFirstTime,
        isLoggedIn,
        completedOnboarding,
        setIsFirstTime,
        setIsLoggedIn,
        setCompletedOnboarding,
        initialAuthScreen,
        setInitialAuthScreen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return ctx;
};
