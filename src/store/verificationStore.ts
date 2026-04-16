import {create} from 'zustand';

interface VerificationState {
  isLoading: boolean;
  error: string | null;
  success: boolean;

  setLoading: (v: boolean) => void;
  setError: (e: string | null) => void;
  setSuccess: (v: boolean) => void;

  reset: () => void;
}

export const useVerificationStore = create<VerificationState>(set => ({
  isLoading: false,
  error: null,
  success: false,

  setLoading: v => set({isLoading: v}),
  setError: e => set({error: e}),
  setSuccess: v => set({success: v}),

  reset: () =>
    set({
      isLoading: false,
      error: null,
      success: false,
    }),
}));
