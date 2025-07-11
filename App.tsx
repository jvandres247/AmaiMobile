import React from 'react';

import LoginScreen from './src/screens/Login/LoginScreen';
import LoginScreenLogo from './src/assets/svg/LoginScreenLogo.svg';
import GradientBackground from './src/components/GradientBackground';
import LoginScreenBio from './src/screens/Login/LoginScreenBio';
import SignUpScreen from './src/screens/SignUp/SignUp';
import ForgotPasswordScreen from './src/screens/ForgotPassword/ForgotPasswordScreen';
import VerificationCodeScreen from './src/screens/ForgotPassword/VerificationCodeScreen';
import LoginScreenBioLogo from './src/assets/svg/LoginScreenBioLogo.svg';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Onboarding from './src/screens/Onboarding/Onboarding';
import RootStack from './src/navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GradientBackground variant="full">
        {/* <LoginScreen /> */}
        {/* <LoginScreenBio /> */}
        {/* <SignUpScreen /> */}
        {/* <ForgotPasswordScreen /> */}
        {/* <VerificationCodeScreen /> */}
        {/* <WelcomeScreen /> */}
        {/* <HomeScreen /> */}
        {/* <Onboarding /> */}
        <RootStack />
      </GradientBackground>
    </GestureHandlerRootView>
  );
}

export default App;
