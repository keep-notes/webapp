import '../src/app/globals.css';
import { MockedProvider } from '@apollo/client/testing';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { GetAuthMock } from '../src/state/auth';

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
      globalMocks: [GetAuthMock],
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
