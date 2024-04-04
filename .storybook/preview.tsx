import '../src/app/globals.css';
import ReactQueryClientProvider from '../src/providers/ReactQueryClientProvider';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ReactQueryClientProvider>
        <Story />
      </ReactQueryClientProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
