'use client';

import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';
import ApolloClientProvider from '@/providers/ApolloClientProvider';

export default function RootProvider(props: PropsWithChildren) {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <ApolloClientProvider>{props.children}</ApolloClientProvider>
    </SnackbarProvider>
  );
}
