import {User} from './user';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  idToken: string;
}

export interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  setSession: (data: {user: User; tokens: Tokens}) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  login: {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    user: User;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}
