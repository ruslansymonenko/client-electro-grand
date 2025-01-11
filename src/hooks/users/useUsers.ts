import { useQuery } from '@tanstack/react-query';
import { usersService } from '@/services/users/users.service';

export const useGetUserById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user-by-id'],
    queryFn: () => usersService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllUsers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-users'],
    queryFn: usersService.getAll,
  });

  return { data, error, isLoading };
};
