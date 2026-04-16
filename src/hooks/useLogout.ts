import {useAuthStore} from '../store/authStore';
import {client} from '../graphql/client';

export const useLogout = () => {
  const logoutStore = useAuthStore(s => s.logout);

  const logout = async () => {
    try {
      // 1. Limpiar Apollo cache
      await client.clearStore();

      // 2. Limpiar Zustand
      logoutStore();
    } catch (err) {
      console.log('Logout error:', err);
    }
  };

  return {logout};
};
