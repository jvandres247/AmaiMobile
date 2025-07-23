import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../../screens/Onboarding/Onboarding';
import AgeScreen from '../../screens/Onboarding/AgeScreen';
import GenderScreen from '../../screens/Onboarding/GenderScreen';
import IntentionScreen from '../../screens/Onboarding/IntentionScreen';
import ManageEmotionScreen from '../../screens/Onboarding/ManageEmotionScreen';
import ConfigNotificationScreen from '../../screens/Onboarding/ConfigNotificationScreen';
import SeedScreen from '../../screens/Onboarding/SeedScreen';
import ProfileCreationScreen from '../../screens/Onboarding/ProfileCreationScreen';

export type OnboardingStackParamList = {
  Onboarding: any;
  AgeScreen: any;
  GenderScreen: any;
  IntentionScreen: any;
  ManageEmotionScreen: any;
  ConfigNotificationScreen: any;
  SeedScreen: any;
  ProfileCreationScreen: any;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="AgeScreen"
        component={AgeScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="IntentionScreen"
        component={IntentionScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ManageEmotionScreen"
        component={ManageEmotionScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ConfigNotificationScreen"
        component={ConfigNotificationScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="SeedScreen"
        component={SeedScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ProfileCreationScreen"
        component={ProfileCreationScreen}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}
