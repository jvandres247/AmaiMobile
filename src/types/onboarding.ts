export type AgeRange =
  | 'OVER_18'
  | 'FROM_18_TO_24'
  | 'FROM_25_TO_34'
  | 'FROM_35_TO_44'
  | 'FROM_45_TO_54'
  | 'FROM_55_TO_64'
  | 'ABOVE_65';

export type Gender = 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';

export type ReminderPreference = 'DAILY' | 'WHEN_NEEDED' | 'NEVER';

export interface OnboardingInput {
  ageRange?: AgeRange;
  gender?: Gender;
  goalIds: string[];
  processingStyleIds: string[];
  reminderPreference?: ReminderPreference;
  plantId?: string;
}

export type CompleteOnboardingVariables = {
  input: OnboardingInput;
};

export type CompleteOnboardingResponse = {
  completeOnboarding: boolean;
};
