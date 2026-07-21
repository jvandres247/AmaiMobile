import {create} from 'zustand';
import {
  OnboardingInput,
  AgeRange,
  Gender,
  ReminderPreference,
} from '../types/onboarding';

interface OnboardingStore {
  input: OnboardingInput;

  setAgeRange: (ageRange: AgeRange) => void;
  setGender: (gender: Gender) => void;
  setGoalIds: (goalIds: string[]) => void;
  setProcessingStyleIds: (ids: string[]) => void;
  setReminderPreference: (preference: ReminderPreference) => void;
  setPlantId: (plantId: string) => void;

  reset: () => void;
}

const initialState: OnboardingInput = {
  goalIds: [],
  processingStyleIds: [],
};

export const useOnboardingStore = create<OnboardingStore>(set => ({
  input: initialState,

  setAgeRange: ageRange =>
    set(state => ({
      input: {
        ...state.input,
        ageRange,
      },
    })),

  setGender: gender =>
    set(state => ({
      input: {
        ...state.input,
        gender,
      },
    })),

  setGoalIds: goalIds =>
    set(state => ({
      input: {
        ...state.input,
        goalIds,
      },
    })),

  setProcessingStyleIds: processingStyleIds =>
    set(state => ({
      input: {
        ...state.input,
        processingStyleIds,
      },
    })),

  setReminderPreference: reminderPreference =>
    set(state => ({
      input: {
        ...state.input,
        reminderPreference,
      },
    })),

  setPlantId: plantId =>
    set(state => ({
      input: {
        ...state.input,
        plantId,
      },
    })),

  reset: () =>
    set({
      input: initialState,
    }),
}));
