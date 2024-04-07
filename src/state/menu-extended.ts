import { gql, useQuery } from '@apollo/client';
import { cache } from '@/apollo/cache';

const GetMenuExtendedQuery = gql`
  query GetMenuExtended {
    menuExtended @client
  }
`;

function useIsMenuExtended() {
  const res = useQuery(GetMenuExtendedQuery);
  return Boolean(res.data?.menuExtended);
}

function useExtendMenu() {
  return (menuExtended: boolean) => {
    cache.writeQuery({
      query: GetMenuExtendedQuery,
      data: { menuExtended },
    });
  };
}

function useToggleMenu() {
  const isExtended = useIsMenuExtended();
  return () =>
    cache.writeQuery({
      query: GetMenuExtendedQuery,
      data: { menuExtended: !isExtended },
    });
}

export { useExtendMenu, useIsMenuExtended, useToggleMenu };
