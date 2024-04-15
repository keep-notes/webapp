import { Meta, StoryObj } from '@storybook/react';
import NoteListSectionHeading from './NoteListSectionHeading';

export const Primary: StoryObj<typeof NoteListSectionHeading> = {
  args: {
    children: 'Pinned Messages',
  },
};

export default {
  component: NoteListSectionHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoteListSectionHeading>;
