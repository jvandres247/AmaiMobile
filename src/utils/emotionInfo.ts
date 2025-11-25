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

export const emotionBoxText = (id: string | null) => {
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

export const NeutralEmotion = [
  {id: 'desconexion', text: 'Desconexión'},
  {id: 'pausa', text: 'En Pausa'},
  {id: 'estabilidad', text: 'Estabilidad'},
  {id: 'indiferente', text: 'Indiferente'},
  {id: 'no_sabe', text: 'No lo sé'},
];

export const NeutralFactors = [
  {id: 'rutina', text: 'Rutina'},
  {id: 'cansancio', text: 'Cansancio'},
  {id: 'sin_motivacion', text: 'Sin Motivación'},
  {id: 'indiferente_factor', text: 'Indiferente'},
  {id: 'no_sabe_factor', text: 'No lo sé'},
];

export const JoyEmotion = [
  {id: 'entusiasmo', text: 'Entusiasmo'},
  {id: 'orgullo', text: 'Orgullo'},
  {id: 'agradecimiento', text: 'Agradecimiento'},
  {id: 'inspiracion', text: 'Inspiración'},
  {id: 'other', text: 'Otro'},
];

export const JoyFactors = [
  {id: 'familia', text: 'Familia'},
  {id: 'relaciones', text: 'Relaciones'},
  {id: 'proyectos', text: 'Proyectos'},
  {id: 'logros', text: 'Logros'},
  {id: 'amistad', text: 'Amistad'},
];

export const CalmEmotion = [
  {id: 'serenidad', text: 'Serenidad'},
  {id: 'estabilidad', text: 'Estabilidad'},
  {id: 'centrado', text: 'Centrado'},
  {id: 'reflexion', text: 'Reflexión'},
  {id: 'other', text: 'Otro'},
];

export const CalmFactors = [
  {id: 'descanso', text: 'Descanso'},
  {id: 'conection', text: 'Conexión'},
  {id: 'free_time', text: 'Tiempo libre'},
  {id: 'organization', text: 'Organización'},
  {id: 'amistad_calm', text: 'Amistad'},
];

export const AnxietyEmotion = [
  {id: 'preocupacion', text: 'Preocupación'},
  {id: 'inquietud', text: 'Inquietud'},
  {id: 'fear', text: 'Miedo'},
  {id: 'angustia', text: 'Angustia'},
  {id: 'dont_know', text: 'No lo sé'},
];

export const AnxietyFactors = [
  {id: 'familia_anxiety', text: 'Familia'},
  {id: 'relaciones_anxiety', text: 'Relaciones'},
  {id: 'proyectos_anxiety', text: 'Proyectos'},
  {id: 'cambios', text: 'Cambios'},
  {id: 'other_anxiety', text: 'Otro'},
];

export const SadEmotion = [
  {id: 'entusiasmo', text: 'Entusiasmo'},
  {id: 'orgullo', text: 'Orgullo'},
  {id: 'agradecimiento', text: 'Agradecimiento'},
  {id: 'inspiracion', text: 'Inspiración'},
  {id: 'other', text: 'Otro'},
];

export const SadFactors = [
  {id: 'familia', text: 'Familia'},
  {id: 'relaciones', text: 'Relaciones'},
  {id: 'proyectos', text: 'Proyectos'},
  {id: 'logros', text: 'Logros'},
  {id: 'amistad', text: 'Amistad'},
];

export const FrustationEmotion = [
  {id: 'enojo', text: 'Enojo'},
  {id: 'irritacion', text: 'Irritación'},
  {id: 'exigencia', text: 'Exigencia'},
  {id: 'impaciencia', text: 'Impaciencia'},
  {id: 'other_frustation', text: 'Otro'},
];

export const FrustationFactors = [
  {id: 'familia', text: 'Metas no cumplidas'},
  {id: 'relaciones', text: 'Relaciones'},
  {id: 'proyectos', text: 'Proyectos'},
  {id: 'expectativas', text: 'Expectativas'},
  {id: 'dont_know_frustation', text: 'No lo se'},
];

export const emotionText = (id: string | null) => {
  switch (id) {
    case 'joy':
      return JoyEmotion;
    case 'sad':
      return SadEmotion;
    case 'frustation':
      return FrustationEmotion;
    case 'anxiety':
      return AnxietyEmotion;
    case 'calm':
      return CalmEmotion;
    case 'neutral':
      return NeutralEmotion;
    default:
      return '';
  }
};

export const emotionFactorText = (id: string | null) => {
  switch (id) {
    case 'joy':
      return JoyFactors;
    case 'sad':
      return SadFactors;
    case 'frustation':
      return FrustationFactors;
    case 'anxiety':
      return AnxietyFactors;
    case 'calm':
      return CalmFactors;
    case 'neutral':
      return NeutralFactors;
    default:
      return '';
  }
};
