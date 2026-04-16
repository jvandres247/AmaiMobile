import {useMutation} from '@apollo/client/react';
import {LOGIN_MUTATION} from '../graphql/mutations/login';
import {useAuthStore} from '../store/authStore';
import {LoginResponse, LoginVariables} from '../types/auth';

export const useLogin = () => {
  const setSession = useAuthStore(s => s.setSession);

  const [mutate, {loading, error}] = useMutation<LoginResponse, LoginVariables>(
    LOGIN_MUTATION,
  );

  const login = async (email: string, password: string) => {
    const {data} = await mutate({
      variables: {email, password},
    });

    if (!data?.login) {
      throw new Error('Login failed');
    }

    const {accessToken, refreshToken, idToken, user} = data.login;

    setSession({
      user,
      tokens: {
        accessToken,
        refreshToken,
        idToken,
      },
    });

    return data.login;
  };

  return {
    login,
    loading,
    error,
  };
};
