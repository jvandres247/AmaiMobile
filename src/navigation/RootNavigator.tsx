import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeStack from './stacks/WelcomeStack';
import AuthStack from './stacks/AuthStack';
import OnboardingStackScreen from './stacks/OnboardingStack';
import AppStack from './stacks/AppStack';

import {useAppContext} from '../context/AppContext'; // temporal
import {useAuthStore} from '../store/authStore';

export default function RootNavigator() {
  const {isFirstTime, completedOnboarding, initialAuthScreen} = useAppContext();

  const isAuthenticated = useAuthStore(s => s.isAuthenticated);
  const hasProfile = useAuthStore(s => s.user?.hasProfile);

  console.log('RootNavigator - isAuthenticated:', isAuthenticated);
  console.log('RootNavigator - hasProfile:', hasProfile);

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrate = async () => {
      await useAuthStore.persist.rehydrate();
      setIsHydrated(true);
    };

    hydrate();
  }, []);

  if (!isHydrated) {
    return null;
  }

  if (isFirstTime) {
    return (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );
  }

  if (!isFirstTime && !isAuthenticated) {
    return (
      <NavigationContainer>
        <AuthStack
          initialAuthScreen={
            (initialAuthScreen as keyof import('./stacks/AuthStack').AuthStackParamList) ??
            'LoginScreen'
          }
        />
      </NavigationContainer>
    );
  }

  if (!hasProfile && !completedOnboarding) {
    return (
      <NavigationContainer>
        <OnboardingStackScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
