import { useQuery } from '@apollo/client';
import { cache } from '@/apollo/cache';
import { GetSearchQuery } from '@/data/gql/search';

function useGetQuery() {
  const res = useQuery(GetSearchQuery);
  return res.data?.query ?? '';
}

function useSetQuery() {
  return (query: string) =>
    cache.writeQuery({
      query: GetSearchQuery,
      data: { query },
    });
}

export { useGetQuery, useSetQuery };
