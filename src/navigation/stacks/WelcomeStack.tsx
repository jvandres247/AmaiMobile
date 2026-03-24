import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function WelcomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Inicio" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
