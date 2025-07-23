import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../../screens/AuthScreen/SignUpScreen';
import ForgotPasswordScreen from '../../screens/AuthScreen/ForgotPasswordScreen';
import VerificationCodeScreen from '../../screens/AuthScreen/VerificationCodeScreen';

export type AuthStackParamList = {
  SignUpScreen: any;
  LoginScreen: any;
  ForgotPasswordScreen: any;
  VerificationCodeScreen: any;
};

type Props = {
  initialAuthScreen: keyof AuthStackParamList;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = ({initialAuthScreen}: Props) => {
  return (
    <Stack.Navigator
      initialRouteName={initialAuthScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="VerificationCodeScreen"
        component={VerificationCodeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
