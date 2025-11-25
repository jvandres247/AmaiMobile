import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmotionIntro from '../../screens/EmotionModalScreen/EmotionIntro';
import SelectEmotion from '../../screens/EmotionModalScreen/SelectEmotion';
import ConfirmEmotion from '../../screens/EmotionModalScreen/ConfirmEmotion';
import QuestionEmotion from '../../screens/EmotionModalScreen/QuestionEmotion';

const Stack = createNativeStackNavigator();

export default function EmotionModalStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EmotionIntro" component={EmotionIntro} />
      <Stack.Screen name="SelectEmotion" component={SelectEmotion} />
      <Stack.Screen name="ConfirmEmotion" component={ConfirmEmotion} />
      <Stack.Screen name="QuestionEmotion" component={QuestionEmotion} />
    </Stack.Navigator>
  );
}
