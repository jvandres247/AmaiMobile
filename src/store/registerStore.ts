import {create} from 'zustand';

interface RegisterState {
  isLoading: boolean;
  error: string | null;
  success: boolean;

  setLoading: (value: boolean) => void;
  setError: (error: string | null) => void;
  setSuccess: (value: boolean) => void;

  reset: () => void;
}

export const useRegisterStore = create<RegisterState>(set => ({
  isLoading: false,
  error: null,
  success: false,

  setLoading: value => set({isLoading: value}),
  setError: error => set({error}),
  setSuccess: value => set({success: value}),

  reset: () =>
    set({
      isLoading: false,
      error: null,
      success: false,
    }),
}));
