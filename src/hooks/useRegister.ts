import {useMutation} from '@apollo/client/react';
import {REGISTER_MUTATION} from '../graphql/mutations/register';
import {useRegisterStore} from '../store/registerStore';

interface RegisterResponse {
  register: boolean; // o string dependiendo backend
}

interface RegisterVariables {
  name: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const {setLoading, setError, setSuccess} = useRegisterStore();

  const [mutate] = useMutation<RegisterResponse, RegisterVariables>(
    REGISTER_MUTATION,
  );

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const {data} = await mutate({
        variables: {name, email, password},
      });

      console.log('REGISTER RESPONSE:', data);

      if (!data?.register) {
        throw new Error('Registro fallido');
      }

      setSuccess(true);

      return data.register;
    } catch (err: any) {
      console.log('REGISTER ERROR:', err);

      setError(err?.message || 'Ocurrió un error al registrarse');

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
  };
};
