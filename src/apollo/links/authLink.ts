import { setContext } from '@apollo/client/link/context';
import { getLocalItem } from '@/state/local';

export const authLink = setContext(async (_, { headers }) => {
  const token = await getLocalItem('authToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
