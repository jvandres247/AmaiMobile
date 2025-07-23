import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppContext} from '../context/AppContext';

import WelcomeStack from './stacks/WelcomeStack';
import AuthStack from './stacks/AuthStack';
import OnboardingStackScreen from './stacks/OnboardingStack';
import AppStack from './stacks/AppStack';

export default function RootNavigator() {
  const {isFirstTime, isLoggedIn, completedOnboarding, initialAuthScreen} =
    useAppContext();

  if (isFirstTime) {
    return (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );
  }

  if (!isFirstTime && !isLoggedIn) {
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

  if (!completedOnboarding) {
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
