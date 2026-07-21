import {useMutation} from '@apollo/client/react';

import {FORGOT_PASSWORD_MUTATION} from '../graphql/mutations/forgotPassword';
import {ForgotPasswordResponse, ForgotPasswordVariables} from '../types/auth';

export const useForgotPassword = () => {
  const [forgotPasswordMutation, {loading, error, data}] = useMutation<
    ForgotPasswordResponse,
    ForgotPasswordVariables
  >(FORGOT_PASSWORD_MUTATION);

  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      const response = await forgotPasswordMutation({
        variables: {
          email,
        },
      });

      return response.data?.forgotPassword ?? false;
    } catch (err) {
      console.error('Forgot password error:', err);
      throw err;
    }
  };

  return {
    forgotPassword,
    loading,
    error,
    data,
  };
};
