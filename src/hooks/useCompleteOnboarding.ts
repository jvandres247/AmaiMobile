import {useMutation} from '@apollo/client/react';
import {ONBOARDING_MUTATION} from '../graphql/mutations/onboarding';

import {
  CompleteOnboardingResponse,
  CompleteOnboardingVariables,
} from '../types/onboarding';

export const useCompleteOnboarding = () => {
  const [completeOnboardingMutation, mutationState] = useMutation<
    CompleteOnboardingResponse,
    CompleteOnboardingVariables
  >(ONBOARDING_MUTATION);

  const completeOnboarding = async (
    input: CompleteOnboardingVariables['input'],
  ) => {
    const {data} = await completeOnboardingMutation({
      variables: {
        input,
      },
    });

    return data?.completeOnboarding;
  };

  return {
    completeOnboarding,
    loading: mutationState.loading,
    error: mutationState.error,
    data: mutationState.data,
  };
};
