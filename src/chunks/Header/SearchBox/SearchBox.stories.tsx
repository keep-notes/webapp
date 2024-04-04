import { StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

type Story = StoryObj<typeof SearchBox>;

export const Full: Story = {
  render: (args) => <SearchBox isCompact={args.isCompact} />,
};

export const Compact: Story = {
  render: () => <SearchBox isCompact />,
};

export default {
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isCompact: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};
