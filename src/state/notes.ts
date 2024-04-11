import { gql, useMutation, useQuery } from '@apollo/client';
import { AddNoteInput, EditNoteInput, Note } from '@/__generated__/graphql';

const AddNoteMutation = gql`
  mutation AddNoteMutation($note: AddNoteInput!) {
    addNote(note: $note) {
      title
      content
    }
  }
`;

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

const useAllNotes = () => {
  const res = useQuery(AllNotesQuery);
  return res.data?.authUser.notes as Note[];
};

const useAddNote = () => {
  const [mutate, state] = useMutation(AddNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  return {
    state,
    async addNote(note: AddNoteInput) {
      return mutate({ variables: { note } });
    },
  };
};

const useEditNote = () => {
  const [mutate] = useMutation(EditNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  return async (noteId: Note['_id'], edit: EditNoteInput) =>
    mutate({ variables: { noteId, edit } });
};

const useDeleteNote = () => {
  const [mutate, state] = useMutation(DeleteNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  return {
    state,
    async deleteNote(noteId: Note['_id']) {
      return mutate({ variables: { noteId } });
    },
  };
};

export { useAddNote, useAllNotes, useEditNote, useDeleteNote };
