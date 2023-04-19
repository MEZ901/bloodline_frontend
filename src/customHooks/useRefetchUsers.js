import { useGetUsersQuery } from "../app/api";

const useRefetchUsers = () => {
  const { refetch, ...queryResult } = useGetUsersQuery();

  const refetchUsers = () => {
    refetch();
  };

  return { ...queryResult, refetchUsers };
};

export default useRefetchUsers;
