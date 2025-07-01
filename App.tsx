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

function App(): React.JSX.Element {
  return (
    <GradientBackground variant="full">
      {/* <LoginScreen /> */}
      {/* <LoginScreenBio /> */}
      {/* <SignUpScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <VerificationCodeScreen /> */}
      {/* <WelcomeScreen /> */}
      <HomeScreen />
    </GradientBackground>
  );
}

export default App;
