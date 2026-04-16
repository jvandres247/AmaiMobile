export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  emailConfirmed: boolean;
  createdAt: string;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;

  setUsers: (users: User[]) => void;
  setSelectedUser: (user: User) => void;
  clearUsers: () => void;
}
