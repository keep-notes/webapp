import { StoryObj } from '@storybook/react';
import TextInput from './index';

export const Primary: StoryObj<typeof TextInput> = {};

export const WithLabel: StoryObj<typeof TextInput> = {
  args: {
    label: 'Label',
  },
};

export const WithError: StoryObj<typeof TextInput> = {
  args: {
    error: 'This is an error message',
  },
};

export const WithLabelAndError: StoryObj<typeof TextInput> = {
  args: {
    label: 'Label',
    error: 'This is an error message',
  },
};

export default {
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
