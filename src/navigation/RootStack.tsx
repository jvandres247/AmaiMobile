import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import ScreenOne from '../screens/Onboarding/ScreenOne';
import ScreenTwo from '../screens/Onboarding/ScreenTwo';
import ScreenThree from '../screens/Onboarding/ScreenThree';

export type RootStackParamList = {
  Onboarding: any;
  ScreenOne: any;
  ScreenTwo: any;
  ScreenThree: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <NavigationContainer>
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
        name="ScreenOne"
        component={ScreenOne}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
