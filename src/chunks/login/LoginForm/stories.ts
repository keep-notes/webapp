import { Meta } from '@storybook/react';
import LoginForm from './index';

export const Primary = {};

export default {
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>;
