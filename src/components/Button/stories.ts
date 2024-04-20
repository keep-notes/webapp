import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export default {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;
