import { faker } from '@faker-js/faker';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NoteModal from './NoteModal';
import { Note } from '@/__generated__/graphql';

export const Primary: StoryObj<typeof NoteModal> = {
  args: {
    note: {
      _id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
    } as Note,
    onClose: fn(),
  },
};

export default {
  component: NoteModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoteModal>;
