import { Meta } from '@storybook/react';
import RegisterForm from './RegisterForm';

export const Primary = {};

export default {
  component: RegisterForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterForm>;
