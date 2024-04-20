import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './index';

type Story = StoryObj<typeof SearchBox>;

export const Primary = {};

export const Compact: Story = {
  args: {
    isCompact: true,
  },
};

export default {
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-32 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBox>;
