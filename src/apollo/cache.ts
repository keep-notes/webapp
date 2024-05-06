import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        notes: {
          merge: true,
        },
      },
    },
  },
});
