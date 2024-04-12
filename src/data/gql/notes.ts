import { gql } from '@apollo/client';
import { faker } from '@faker-js/faker';
import { fakeUser } from '@/data/gql/auth';

const fakeNote = () => {
  return {
    _id: faker.string.uuid(),
    title: faker.lorem.word(),
    content: faker.lorem.text(),
    userId: fakeUser._id,
    user: fakeUser,
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
};

const AllNotesQuery = gql`
  query AllNotesQuery {
    authUser {
      notes {
        _id
        content
        title
      }
    }
  }
`;

const AllNotesMock = {
  request: { query: AllNotesQuery },
  result: {
    data: {
      authUser: { notes: Array(faker.number.int(15)).fill(0).map(fakeNote) },
    },
  },
};

const AddNoteMutation = gql`
  mutation AddNoteMutation($note: AddNoteInput!) {
    addNote(note: $note) {
      title
      content
    }
  }
`;

const EditNoteMutation = gql`
  mutation EditNoteMutation($noteId: String!, $edit: EditNoteInput!) {
    editNote(noteId: $noteId, edit: $edit) {
      _id
      content
      title
    }
  }
`;

const DeleteNoteMutation = gql`
  mutation DeleteNoteMutation($noteId: String!) {
    deleteNote(noteId: $noteId) {
      title
      content
    }
  }
`;

export {
  AllNotesMock,
  AllNotesQuery,
  AddNoteMutation,
  EditNoteMutation,
  DeleteNoteMutation,
};
