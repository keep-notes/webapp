import { Meta, StoryObj } from '@storybook/react';
import TextBox from './index';

export const Primary: StoryObj<typeof TextBox> = {};

export default {
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextBox>;
