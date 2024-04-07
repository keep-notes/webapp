import { onError } from '@apollo/client/link/error';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

export function useErrorLink() {
  const router = useRouter();

  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {
        if (error.extensions.code === 403) {
          enqueueSnackbar(
            'You were logged out by the server. Please log in again'
          );
          router.push('/login');
        }
      });
    }

    if (networkError)
      enqueueSnackbar('Could not connect to server', { variant: 'error' });
  });
}
