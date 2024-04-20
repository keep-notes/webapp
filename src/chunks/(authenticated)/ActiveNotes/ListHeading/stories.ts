import { Meta, StoryObj } from '@storybook/react';
import ListHeading from './index';

export const Primary: StoryObj<typeof ListHeading> = {
  args: {
    children: 'Pinned Messages',
  },
};

export default {
  component: ListHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListHeading>;
