import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from '../screens/Onboarding/ScreenOne';
import ScreenTwo from '../screens/Onboarding/ScreenTwo';
import ScreenThree from '../screens/Onboarding/ScreenThree';

export type RootStackParamList = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
