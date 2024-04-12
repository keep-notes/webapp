import { gql, useQuery } from '@apollo/client';
import { cache } from '@/apollo/cache';

const GetSearchQuery = gql`
  query GetSearch {
    search @client
  }
`;

function useGetSearch() {
  const res = useQuery(GetSearchQuery);
  return res.data?.search ?? '';
}

function useSetSearch() {
  return (search: string) =>
    cache.writeQuery({
      query: GetSearchQuery,
      data: { search },
    });
}

export { useGetSearch, useSetSearch };
