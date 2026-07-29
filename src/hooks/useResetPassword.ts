import {useMutation} from '@apollo/client/react';
import {RESET_PASSWORD_MUTATION} from '../graphql/mutations/resetPassword';
import {useVerificationStore} from '../store/verificationStore';

interface ResetResponse {
  resetPassword: boolean;
}

interface ResetVariables {
  email: string;
  newPassword: string;
  code: string;
}

export const useResetPassword = () => {
  const {setLoading, setError, setSuccess} = useVerificationStore();

  const [mutate] = useMutation<ResetResponse, ResetVariables>(
    RESET_PASSWORD_MUTATION,
  );

  const resetPassword = async (
    email: string,
    newPassword: string,
    code: string,
  ) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const {data} = await mutate({
        variables: {email, newPassword, code},
      });

      console.log('RESET RESPONSE:', data);

      if (!data?.resetPassword) {
        throw new Error('Código inválido');
      }

      setSuccess(true);

      return data.resetPassword;
    } catch (err: any) {
      console.log('RESET ERROR:', err);

      setError(err?.message || 'Error al restablecer la contraseña');

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassword,
  };
};
