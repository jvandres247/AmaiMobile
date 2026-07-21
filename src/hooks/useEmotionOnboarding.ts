import {useQuery} from '@apollo/client/react';
import {EMOTION_PROCESSING_STYLES} from '../graphql/queries/emotionsOnboarding';
import {useEmotionOnboardingStore} from '../store/emotionOnboarding';
import {useEffect} from 'react';
import {
  emotionProcessingAndGoals,
  activePlants,
} from '../types/emotionsOnboarding';

interface EmotionOnboardingResponse {
  emotionProcessingStyles: emotionProcessingAndGoals[];
  emotionalGoals: emotionProcessingAndGoals[];
  activePlants: activePlants[];
}

export const useEmotionOnboarding = () => {
  const setEmotionProcessingStyles = useEmotionOnboardingStore(
    s => s.setEmotionProcessingStyles,
  );
  const setEmotionalGoals = useEmotionOnboardingStore(s => s.setEmotionalGoals);
  const setActivePlants = useEmotionOnboardingStore(s => s.setActivePlants);

  const {data, loading, error, refetch} = useQuery<EmotionOnboardingResponse>(
    EMOTION_PROCESSING_STYLES,
  );

  useEffect(() => {
    if (data?.emotionProcessingStyles) {
      setEmotionProcessingStyles(data.emotionProcessingStyles);
    }
    if (data?.emotionalGoals) {
      setEmotionalGoals(data.emotionalGoals);
    }
    if (data?.activePlants) {
      setActivePlants(data.activePlants);
    }
  }, [data, setEmotionProcessingStyles, setEmotionalGoals, setActivePlants]);

  return {
    emotionalGoals: data?.emotionalGoals || [],
    emotionProcessingStyles: data?.emotionProcessingStyles || [],
    activePlants: data?.activePlants || [],
    loading,
    error,
    refetch,
  };
};
