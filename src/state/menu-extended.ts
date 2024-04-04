import { useQuery, useQueryClient } from '@tanstack/react-query';

const key = 'menu-extended';

function useIsMenuExtended() {
  const query = useQuery<boolean>({
    queryKey: [key],
  });

  return Boolean(query.data);
}

function useExtendMenu() {
  const queryClient = useQueryClient();
  return (val: boolean) => queryClient.setQueryData([key], val);
}

function useToggleMenu() {
  const queryClient = useQueryClient();
  const isExtended = useIsMenuExtended();

  return () => queryClient.setQueryData([key], !isExtended);
}

export { useExtendMenu, useIsMenuExtended, useToggleMenu };
