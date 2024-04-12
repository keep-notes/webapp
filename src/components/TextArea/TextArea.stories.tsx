import { StoryObj } from '@storybook/react';
import TextArea from './TextArea';

export const Primary: StoryObj<typeof TextArea> = {
  args: {
    variant: 'bordered',
  },
};

export default {
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
