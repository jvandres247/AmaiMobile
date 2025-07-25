/**
 * src/theme/colors.ts
 * Paleta centralizada para toda la app
 */
const COLORS = {
  // --- Actions ---
  main: '#81AD3F',
  // --- Textos ---
  titles: '#1A191D',
  description: '#404040',
  icons: '#7D7D7D',
  links: '#81AD3F',

  // --- Background ---
  borders: '#B5B5B5',
  fieldEmpty: '#F8F8F8',
  fieldSelector: '#E3E6D5',
  fieldError: '#FFDADF',
  white: '#FFFFFF',
  black: '#000000',
  silverGray: '#D9D9D9',

  // --- Emotions ---
  joy: '#FFDB6C',
  sad: '#97BAFF',
  anxiety: '#FFA755',
  mad: '#F3764D',
  calm: '#FFBCC1',
  neutral: '#A5E9F2',

  // --- Gradients ---
  primaryStart: '#FFEEB7',
  primaryEnd: '#C2E5B5',

  secondaryStart: '#B7EEFF',
  secondaryEnd: '#B5C5E5',
} as const;

export default COLORS;
