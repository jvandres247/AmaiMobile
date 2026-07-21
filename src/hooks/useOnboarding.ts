import {useOnboardingStore} from '../store/onboardingStore';

export const useOnboarding = () => {
  const input = useOnboardingStore(state => state.input);

  const setAgeRange = useOnboardingStore(state => state.setAgeRange);

  const setGender = useOnboardingStore(state => state.setGender);

  const setGoalIds = useOnboardingStore(state => state.setGoalIds);

  const setProcessingStyleIds = useOnboardingStore(
    state => state.setProcessingStyleIds,
  );

  const setReminderPreference = useOnboardingStore(
    state => state.setReminderPreference,
  );

  const setPlantId = useOnboardingStore(state => state.setPlantId);

  const reset = useOnboardingStore(state => state.reset);

  return {
    input,
    setAgeRange,
    setGender,
    setGoalIds,
    setProcessingStyleIds,
    setReminderPreference,
    setPlantId,
    reset,
  };
};
