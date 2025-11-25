// src/navigation/stacks/AppStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import EmotionModalStack from '../modals/EmotionModalStack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />

      {/* Modal stack */}
      <Stack.Screen
        name="EmotionModalStack"
        component={EmotionModalStack}
        options={{
          presentation: 'card',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
