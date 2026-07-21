import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

type GoogleUser = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
};

type AuthGoogleState = {
  user: GoogleUser | null;
  token: string | null;

  setSession: (user: GoogleUser, token: string) => void;
  logout: () => void;
};

export const useAuthGoogleStore = create<AuthGoogleState>()(
  persist(
    set => ({
      user: null,
      token: null,

      setSession: (user, token) =>
        set({
          user,
          token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: 'auth-google-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
