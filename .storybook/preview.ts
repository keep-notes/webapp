import '@/app/globals.css';
import { GetAuthMock } from '@/data/gql/auth';
import { AllNotesMock } from '@/data/gql/notes';
import { MockedProvider } from '@apollo/client/testing';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
      globalMocks: [GetAuthMock, AllNotesMock],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
