import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  email: string;
  emailConfirmed: boolean;
  role: string;
  createdAt: string;
  __typename: string;
};

export const useStoredUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const raw = await AsyncStorage.getItem('auth-storage');
        if (!raw) {
          setLoading(false);
          return;
        }

        const parsed = JSON.parse(raw);
        let state = parsed?.state;
        if (typeof state === 'string') {
          state = JSON.parse(state);
        }

        const storedUser = state?.user;

        setUser(storedUser ?? null);
      } catch (error) {
        console.error('Error reading storage', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return {user, loading};
};
