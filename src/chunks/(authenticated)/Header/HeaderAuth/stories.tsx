import { Meta } from '@storybook/react';
import HeaderAuth from './index';

export const Primary = {};

export default {
  component: HeaderAuth,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="static grid h-72 place-items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderAuth>;
