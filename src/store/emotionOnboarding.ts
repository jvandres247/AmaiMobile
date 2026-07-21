import {create} from 'zustand';
import {EmotionOnboardingState} from '../types/emotionsOnboarding';

export const useEmotionOnboardingStore = create<EmotionOnboardingState>(
  set => ({
    emotionProcessingStyles: [],
    emotionalGoals: [],
    activePlants: [],

    setEmotionProcessingStyles: emotionProcessingStyles =>
      set({emotionProcessingStyles}),

    setEmotionalGoals: emotionalGoals => set({emotionalGoals}),

    setActivePlants: activePlants => set({activePlants}),

    clearEmotionOnboarding: () =>
      set({
        emotionProcessingStyles: [],
        emotionalGoals: [],
        activePlants: [],
      }),
  }),
);
