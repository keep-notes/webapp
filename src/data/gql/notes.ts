import { gql } from '@apollo/client';
import { faker } from '@faker-js/faker';
import { Note } from '@/__generated__/graphql';
import { fakeUser } from '@/data/gql/auth';

const fakeNote = (): Note => {
  return {
    _id: faker.string.uuid(),
    title: faker.lorem.word(),
    content: faker.lorem.text(),
    isPinned: faker.datatype.boolean(0.3),
    isArchived: faker.datatype.boolean(0.1),
    isTrashed: faker.datatype.boolean(0.1),
    userId: fakeUser._id,
    user: fakeUser,
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
};

const fakeNotesArray = Array(faker.number.int(15)).fill(0).map(fakeNote);

const AllNotesQuery = gql`
  query UserNotesQuery($query: String) {
    authUser {
      notes(query: $query) {
        _id
        content
        title
        isPinned
        isArchived
        isTrashed
      }
      trashed {
        _id
        content
        title
        isPinned
        isArchived
        isTrashed
      }
      archived {
        _id
        content
        title
        isPinned
        isArchived
        isTrashed
      }
    }
  }
`;

const GetOpenedNoteQuery = gql`
  query GetOpenedNote {
    openedNote @client {
      _id
      content
      title
      isPinned
    }
  }
`;

const OpenedNoteMock = {
  request: { query: GetOpenedNoteQuery },
  result: {
    data: { openedNote: fakeNote() },
  },
};

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
  OpenedNoteMock,
  GetOpenedNoteQuery,
  fakeNotesArray,
};
