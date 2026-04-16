import {create} from 'zustand';
import {UserState} from '../types/user';

export const useUserStore = create<UserState>(set => ({
  users: [],
  selectedUser: null,

  setUsers: users => set({users}),

  setSelectedUser: user => set({selectedUser: user}),

  clearUsers: () => set({users: [], selectedUser: null}),
}));
