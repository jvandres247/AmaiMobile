import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

import BigSad from '../assets/svg/BigSad.svg';
import BigFrustation from '../assets/svg/BigFrustation.svg';
import BigAnxiety from '../assets/svg/BigAnxiety.svg';
import BigCalm from '../assets/svg/BigCalm.svg';
import BigNeutral from '../assets/svg/BigNeutral.svg';

export interface EmotionPageOptions {
  id: string;
  text: string;
}

export interface EmotionIconOptions {
  id: string;
  Icon: FC<SvgProps>;
}

export const emotionSelectedText = (id: string | null) => {
  switch (id) {
    case 'joy':
      return 'Feliz';
    case 'sad':
      return 'Tristeza';
    case 'frustation':
      return 'Frustración';
    case 'anxiety':
      return 'Ansiedad';
    case 'calm':
      return 'En calma';
    case 'neutral':
      return 'Neutral';
    default:
      return '';
  }
};

export const emotionPhraseText = (id: string | null) => {
  switch (id) {
    case 'joy':
      return '¡Nos alegra acompañarte hoy!';
    case 'sad':
      return 'Estas en un lugar seguro para sentir';
    case 'frustation':
      return 'Aveces no todo fluye como quisieramos';
    case 'anxiety':
      return 'Vamos paso a paso, no estas sola.';
    case 'calm':
      return 'Nos alegra saber que estas en equilibrio';
    case 'neutral':
      return 'Gracias por estar presente';
    default:
      return '';
  }
};

export const emotionBoxLabel = (id: string | null) => {
  switch (id) {
    case 'joy':
      return '¿Quieres compartirlo en palabras?';
    case 'sad':
      return '¿Quieres soltarlo en palabras?';
    case 'frustation':
      return '¿Quieres soltarlo en palabras?';
    case 'anxiety':
      return '¿Quieres soltarlo en palabras?';
    case 'calm':
      return '¿Quieres decirte algo hoy?';
    case 'neutral':
      return '¿Quieres compartirlo en palabras?';
    default:
      return '';
  }
};

export const emotionBoxPlaceholder = (id: string | null) => {
  switch (id) {
    case 'joy':
      return '¡Ponlo en palabras y deja que florezca!';
    case 'sad':
      return 'Aveces escribir ayuda a soltar un poco lo que duele..';
    case 'frustation':
      return 'Suelta aquí lo que te incomoda, no tienes que cargar con todo...';
    case 'anxiety':
      return 'Aquí lo puedes expresar sin juicios ...';
    case 'calm':
      return 'Conecta con tu voz interna y deja que fluya';
    case 'neutral':
      return 'Aveces al escribir nos ayuda a aclarar lo que sentimos...';
    default:
      return '';
  }
};

// --- Neutral Emotions, factors and icons ---
export const NeutralEmotion = [
  {id: 'desconexion', text: 'Desconexión'},
  {id: 'pausa', text: 'En Pausa'},
  {id: 'estabilidad', text: 'Estabilidad'},
  {id: 'indiferente', text: 'Indiferente'},
  {id: 'no_sabe', text: 'No lo sé'},
];

export const NeutralEmotionIcons = [
  {id: 'desconexion', Icon: BigFrustation},
  {id: 'pausa', Icon: BigAnxiety},
  {id: 'estabilidad', Icon: BigSad},
  {id: 'indiferente', Icon: BigNeutral},
  {id: 'no_sabe', Icon: BigCalm},
];

export const NeutralFactors = [
  {id: 'rutina', text: 'Rutina'},
  {id: 'cansancio', text: 'Cansancio'},
  {id: 'sin_motivacion', text: 'Sin Motivación'},
  {id: 'indiferente_factor', text: 'Indiferente'},
  {id: 'no_sabe_factor', text: 'No lo sé'},
];

export const NeutralFactorsIcons = [
  {id: 'rutina', Icon: BigFrustation},
  {id: 'cansancio', Icon: BigAnxiety},
  {id: 'sin_motivacion', Icon: BigSad},
  {id: 'indiferente_factor', Icon: BigNeutral},
  {id: 'no_sabe_factor', Icon: BigCalm},
];
// --- Neutral Emotions, factors and icons ---

// --- Joy Emotions, factors and icons ---
export const JoyEmotion = [
  {id: 'entusiasmo', text: 'Entusiasmo'},
  {id: 'orgullo', text: 'Orgullo'},
  {id: 'agradecimiento', text: 'Agradecimiento'},
  {id: 'inspiracion', text: 'Inspiración'},
  {id: 'other', text: 'Otro'},
];

export const JoyEmotionIcons = [
  {id: 'entusiasmo', Icon: BigFrustation},
  {id: 'orgullo', Icon: BigAnxiety},
  {id: 'agradecimiento', Icon: BigSad},
  {id: 'inspiracion', Icon: BigNeutral},
  {id: 'other', Icon: BigCalm},
];

export const JoyFactors = [
  {id: 'familia', text: 'Familia'},
  {id: 'relaciones', text: 'Relaciones'},
  {id: 'proyectos', text: 'Proyectos'},
  {id: 'logros', text: 'Logros'},
  {id: 'amistad', text: 'Amistad'},
];

export const JoyFactorsIcons = [
  {id: 'familia', Icon: BigFrustation},
  {id: 'relaciones', Icon: BigAnxiety},
  {id: 'proyectos', Icon: BigSad},
  {id: 'logros', Icon: BigNeutral},
  {id: 'amistad', Icon: BigCalm},
];
// --- Joy Emotions, factors and icons ---

// --- Calm Emotions, factors and icons ---
export const CalmEmotion = [
  {id: 'serenidad', text: 'Serenidad'},
  {id: 'estabilidad', text: 'Estabilidad'},
  {id: 'centrado', text: 'Centrado'},
  {id: 'reflexion', text: 'Reflexión'},
  {id: 'other', text: 'Otro'},
];

export const CalmEmotionIcons = [
  {id: 'serenidad', Icon: BigFrustation},
  {id: 'estabilidad', Icon: BigAnxiety},
  {id: 'centrado', Icon: BigSad},
  {id: 'reflexion', Icon: BigNeutral},
  {id: 'other', Icon: BigCalm},
];

export const CalmFactors = [
  {id: 'descanso', text: 'Descanso'},
  {id: 'conection', text: 'Conexión'},
  {id: 'free_time', text: 'Tiempo libre'},
  {id: 'organization', text: 'Organización'},
  {id: 'amistad_calm', text: 'Amistad'},
];

export const CalmFactorsIcons = [
  {id: 'descanso', Icon: BigFrustation},
  {id: 'conection', Icon: BigAnxiety},
  {id: 'free_time', Icon: BigSad},
  {id: 'organization', Icon: BigNeutral},
  {id: 'amistad_calm', Icon: BigCalm},
];
// --- Calm Emotions, factors and icons ---

// --- Anxiety Emotions, factors and icons ---
export const AnxietyEmotion = [
  {id: 'preocupacion', text: 'Preocupación'},
  {id: 'inquietud', text: 'Inquietud'},
  {id: 'fear', text: 'Miedo'},
  {id: 'angustia', text: 'Angustia'},
  {id: 'dont_know', text: 'No lo sé'},
];

export const AnxietyEmotionIcons = [
  {id: 'preocupacion', Icon: BigFrustation},
  {id: 'inquietud', Icon: BigAnxiety},
  {id: 'fear', Icon: BigSad},
  {id: 'angustia', Icon: BigNeutral},
  {id: 'dont_know', Icon: BigCalm},
];

export const AnxietyFactors = [
  {id: 'familia_anxiety', text: 'Familia'},
  {id: 'relaciones_anxiety', text: 'Relaciones'},
  {id: 'proyectos_anxiety', text: 'Proyectos'},
  {id: 'cambios', text: 'Cambios'},
  {id: 'other_anxiety', text: 'Otro'},
];

export const AnxietyFactorsIcons = [
  {id: 'familia_anxiety', Icon: BigFrustation},
  {id: 'relaciones_anxiety', Icon: BigAnxiety},
  {id: 'proyectos_anxiety', Icon: BigSad},
  {id: 'cambios', Icon: BigNeutral},
  {id: 'other_anxiety', Icon: BigCalm},
];
// --- Anxiety Emotions, factors and icons ---

// --- Sad Emotions, factors and icons ---
export const SadEmotion = [
  {id: 'entusiasmo', text: 'Entusiasmo'},
  {id: 'orgullo', text: 'Orgullo'},
  {id: 'agradecimiento', text: 'Agradecimiento'},
  {id: 'inspiracion', text: 'Inspiración'},
  {id: 'other', text: 'Otro'},
];

export const SadEmotionIcons = [
  {id: 'entusiasmo', Icon: BigFrustation},
  {id: 'orgullo', Icon: BigAnxiety},
  {id: 'agradecimiento', Icon: BigSad},
  {id: 'inspiracion', Icon: BigNeutral},
  {id: 'other', Icon: BigCalm},
];

export const SadFactors = [
  {id: 'familia', text: 'Familia'},
  {id: 'relaciones', text: 'Relaciones'},
  {id: 'proyectos', text: 'Proyectos'},
  {id: 'logros', text: 'Logros'},
  {id: 'amistad', text: 'Amistad'},
];

export const SadFactorsIcons = [
  {id: 'familia', Icon: BigFrustation},
  {id: 'relaciones', Icon: BigAnxiety},
  {id: 'proyectos', Icon: BigSad},
  {id: 'logros', Icon: BigNeutral},
  {id: 'amistad', Icon: BigCalm},
];
// --- Sad Emotions, factors and icons ---

// --- Frustation Emotions, factors and icons ---
export const FrustationEmotion = [
  {id: 'enojo', text: 'Enojo'},
  {id: 'irritacion', text: 'Irritación'},
  {id: 'exigencia', text: 'Exigencia'},
  {id: 'impaciencia', text: 'Impaciencia'},
  {id: 'other_frustation', text: 'Otro'},
];

export const FrustationEmotionIcons = [
  {id: 'enojo', Icon: BigFrustation},
  {id: 'irritacion', Icon: BigAnxiety},
  {id: 'exigencia', Icon: BigSad},
  {id: 'impaciencia', Icon: BigNeutral},
  {id: 'other_frustation', Icon: BigCalm},
];

export const FrustationFactors = [
  {id: 'familia', text: 'Metas no\ncumplidas'},
  {id: 'relaciones', text: 'Relaciones\n'},
  {id: 'proyectos', text: 'Proyectos\n'},
  {id: 'expectativas', text: 'Expectativas\n'},
  {id: 'dont_know_frustation', text: 'No\nlo se'},
];

export const FrustationFactorsIcons = [
  {id: 'familia', Icon: BigFrustation},
  {id: 'relaciones', Icon: BigAnxiety},
  {id: 'proyectos', Icon: BigSad},
  {id: 'expectativas', Icon: BigNeutral},
  {id: 'dont_know_frustation', Icon: BigCalm},
];
// --- Frustation Emotions, factors and icons ---

export const EMOTION_MAP: Record<string, EmotionPageOptions[]> = {
  joy: JoyEmotion,
  sad: SadEmotion,
  frustation: FrustationEmotion,
  anxiety: AnxietyEmotion,
  calm: CalmEmotion,
  neutral: NeutralEmotion,
};

export const emotionOptions = (id: string | null): EmotionPageOptions[] => {
  if (!id) {
    return [];
  }
  return EMOTION_MAP[id] ?? [];
};

export const FACTOR_MAP: Record<string, EmotionPageOptions[]> = {
  joy: JoyFactors,
  sad: SadFactors,
  frustation: FrustationFactors,
  anxiety: AnxietyFactors,
  calm: CalmFactors,
  neutral: NeutralFactors,
};

export const factorOptions = (id: string | null): EmotionPageOptions[] => {
  if (!id) {
    return [];
  }
  return FACTOR_MAP[id] ?? [];
};

export const ICON_EMOTION_MAP: Record<string, EmotionIconOptions[]> = {
  joy: JoyEmotionIcons,
  sad: SadEmotionIcons,
  frustation: FrustationEmotionIcons,
  anxiety: AnxietyEmotionIcons,
  calm: CalmEmotionIcons,
  neutral: NeutralEmotionIcons,
};

export const iconEmotionOptions = (id: string | null): EmotionIconOptions[] => {
  if (!id) {
    return [];
  }
  return ICON_EMOTION_MAP[id] ?? [];
};

export const ICON_FACTORS_MAP: Record<string, EmotionIconOptions[]> = {
  joy: JoyFactorsIcons,
  sad: SadFactorsIcons,
  frustation: FrustationFactorsIcons,
  anxiety: AnxietyFactorsIcons,
  calm: CalmFactorsIcons,
  neutral: NeutralFactorsIcons,
};

export const factorIconOptions = (id: string | null): EmotionIconOptions[] => {
  if (!id) {
    return [];
  }
  return ICON_FACTORS_MAP[id] ?? [];
};
