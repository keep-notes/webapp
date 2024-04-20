import { StoryObj } from '@storybook/react';
import ActiveNotes from './index';

export const Primary: StoryObj<typeof ActiveNotes> = {};

export default {
  component: ActiveNotes,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
