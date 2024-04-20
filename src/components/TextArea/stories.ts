import { StoryObj } from '@storybook/react';
import Index from './index';

export const Primary: StoryObj<typeof Index> = {
  args: {
    variant: 'bordered',
  },
};

export default {
  component: Index,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
