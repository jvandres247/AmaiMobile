export interface emotionProcessingAndGoals {
  id: string;
  title: string;
}

export interface activePlants {
  id: string;
  name: string;
  represents: string;
  stages: {
    id: string;
    imageUrl: string;
    requiredPoints: string;
  };
  seasons: {
    id: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
  };
}

export interface EmotionOnboardingState {
  emotionProcessingStyles: emotionProcessingAndGoals[];
  emotionalGoals: emotionProcessingAndGoals[];
  activePlants: activePlants[];

  setEmotionProcessingStyles: (
    emotionProcessingStyles: emotionProcessingAndGoals[],
  ) => void;
  setEmotionalGoals: (emotionalGoals: emotionProcessingAndGoals[]) => void;
  setActivePlants: (activePlants: activePlants[]) => void;
  clearEmotionOnboarding: () => void;
}
