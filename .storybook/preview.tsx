import '../src/app/globals.css';
import { MockedProvider } from '@apollo/client/testing';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { GetAuthQuery } from '../src/state/auth';

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
      globalMocks: [
        {
          request: {
            query: GetAuthQuery,
          },
          result: {
            data: {
              authUser: {
                _id: 'id',
                email: 'email@example.com',
                name: 'John Doe',
              },
            },
          },
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
