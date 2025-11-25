import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

/**
 * Tipado principal del Stack EmotionModalStack
 */
export type EmotionModalStackParamList = {
  EmotionIntro: undefined;
  SelectEmotion: undefined;
  ConfirmEmotion: undefined;
  QuestionEmotion: {emotion: string | null};
};

/**
 * Tipado del hook useNavigation
 */
export type EmotionModalNavigationProp =
  NativeStackNavigationProp<EmotionModalStackParamList>;

/**
 * Tipado del hook useRoute para QuestionEmotion
 */
export type QuestionEmotionRouteProp = RouteProp<
  EmotionModalStackParamList,
  'QuestionEmotion'
>;
