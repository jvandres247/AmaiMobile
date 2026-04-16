import {useMutation} from '@apollo/client/react';
import {CONFIRM_EMAIL_MUTATION} from '../graphql/mutations/confirmEmail';
import {useVerificationStore} from '../store/verificationStore';

interface ConfirmResponse {
  confirmEmail: boolean; // o string según backend
}

interface ConfirmVariables {
  email: string;
  code: string;
}

export const useConfirmEmail = () => {
  const {setLoading, setError, setSuccess} = useVerificationStore();

  const [mutate] = useMutation<ConfirmResponse, ConfirmVariables>(
    CONFIRM_EMAIL_MUTATION,
  );

  const confirmEmail = async (email: string, code: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const {data} = await mutate({
        variables: {email, code},
      });

      console.log('CONFIRM RESPONSE:', data);

      if (!data?.confirmEmail) {
        throw new Error('Código inválido');
      }

      setSuccess(true);

      return data.confirmEmail;
    } catch (err: any) {
      console.log('CONFIRM ERROR:', err);

      setError(err?.message || 'Error al confirmar el código');

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    confirmEmail,
  };
};
