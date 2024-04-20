import { Meta } from '@storybook/react';
import Header from './index';

export const Primary = {};

export default {
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;
