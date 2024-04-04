import { useQuery, useQueryClient } from '@tanstack/react-query';

const searchKey = 'search';

function useGetSearch() {
  return useQuery<string>({
    queryKey: [searchKey],
  });
}

function useSetSearch() {
  const queryClient = useQueryClient();
  return (newVal: string) => queryClient.setQueryData([searchKey], newVal);
}

export { useGetSearch, useSetSearch };
