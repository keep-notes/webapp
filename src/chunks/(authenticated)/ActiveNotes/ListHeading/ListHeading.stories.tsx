import { Meta, StoryObj } from '@storybook/react';
import ListHeading from './ListHeading';

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
