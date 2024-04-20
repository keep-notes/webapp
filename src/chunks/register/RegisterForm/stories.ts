import { Meta } from '@storybook/react';
import RegisterForm from './index';

export const Primary = {};

export default {
  component: RegisterForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterForm>;
