import { StoryObj } from '@storybook/react';
import TextBox from './TextBox';

export const Primary: StoryObj<typeof TextBox> = {};

export default {
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
