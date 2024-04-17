import { StoryObj } from '@storybook/react';
import NoteList from './NoteList';
import { fakeNotesArray } from '@/data/gql/notes';

export const Primary: StoryObj<typeof NoteList> = {
  args: {
    notes: fakeNotesArray,
  },
};

export default {
  component: NoteList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
