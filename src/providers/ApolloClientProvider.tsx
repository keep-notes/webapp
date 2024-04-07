'use client';

import { ApolloClient, ApolloProvider, from } from '@apollo/client';
import { PropsWithChildren, useState } from 'react';
import { httpLink } from '@/apollo/links/httpLink';
import { authLink } from '@/apollo/links/authLink';
import { useErrorLink } from '@/apollo/links/errorLink';
import { cache } from '@/apollo/cache';

export default function ApolloClientProvider(props: PropsWithChildren) {
  const errorLink = useErrorLink();
  const [client] = useState(
    new ApolloClient({
      link: from([errorLink, authLink.concat(httpLink)]),
      cache,
    })
  );

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
