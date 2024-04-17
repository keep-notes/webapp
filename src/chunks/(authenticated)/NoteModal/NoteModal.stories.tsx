import { Meta, StoryObj } from '@storybook/react';
import NoteModal from './NoteModal';

export const Primary: StoryObj<typeof NoteModal> = {};

export default {
  component: NoteModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoteModal>;
