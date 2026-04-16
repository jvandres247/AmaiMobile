import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../../screens/AuthScreen/SignUpScreen';
import ForgotPasswordScreen from '../../screens/AuthScreen/ForgotPasswordScreen';
import VerificationCodeScreen from '../../screens/AuthScreen/VerificationCodeScreen';
import ChangePasswordScreen from '../../screens/AuthScreen/ChangePasswordScreen';

export type AuthStackParamList = {
  SignUpScreen: any;
  LoginScreen: any;
  ForgotPasswordScreen: any;
  VerificationCodeScreen: {
    email: string;
    password: string;
  };
  ChangePasswordScreen: any;
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
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
