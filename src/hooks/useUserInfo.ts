import {useQuery} from '@apollo/client/react';
import {USER_INFO_QUERY} from '../graphql/queries/userInfo';
import {useUserStore} from '../store/userStore';
import {useEffect} from 'react';
import {User} from '../types/user';

interface UsersResponse {
  users: User[];
}

export const useUsers = () => {
  const setUsers = useUserStore(s => s.setUsers);

  const {data, loading, error, refetch} =
    useQuery<UsersResponse>(USER_INFO_QUERY);

  useEffect(() => {
    if (data?.users) {
      setUsers(data.users);
    }
  }, [data, setUsers]);

  return {
    users: data?.users || [],
    loading,
    error,
    refetch,
  };
};
