import { MutationResult, useMutation, useQuery } from '@apollo/client';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { cache } from '@/apollo/cache';
import { AddNoteInput, EditNoteInput, Note } from '@/__generated__/graphql';
import {
  AddNoteMutation,
  AllNotesQuery,
  DeleteNoteMutation,
  EditNoteMutation,
  GetOpenedNoteQuery,
  OpenedNoteMock,
  PinNoteMutation,
  UnpinNoteMutation,
} from '@/data/gql/notes';

const useAllNotes = () => {
  const res = useQuery(AllNotesQuery);
  return res.data?.authUser.notes as Note[];
};

const useOpenedNote = () => {
  const res = useQuery(GetOpenedNoteQuery);
  if (process.env.STORYBOOK_ENV === 'true')
    return OpenedNoteMock.result.data.openedNote;
  return res.data?.openedNote as Note | undefined;
};

const useOpenNote = () => {
  if (process.env.STORYBOOK_ENV === 'true')
    return action('open-note/close-note');
  return (openedNote: Note | null) => {
    cache.writeQuery({
      query: GetOpenedNoteQuery,
      data: { openedNote },
    });
  };
};

const useAddNote = () => {
  const [mutate, state] = useMutation(AddNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  if (process.env.STORYBOOK_ENV === 'true') return addNoteAction(state);

  return {
    state,
    async addNote(note: AddNoteInput) {
      return mutate({ variables: { note } });
    },
  };
};

const addNoteAction = (state: MutationResult) => {
  return {
    state,
    addNote: fn((...args) => {
      action('add-note')(...args);
      return { data: { addNote: { ...args } } };
    }),
  };
};

const usePinNote = () => {
  const [mutate] = useMutation(PinNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });
  if (process.env.STORYBOOK_ENV === 'true') return action('pin-note');
  return async (noteId: string) => mutate({ variables: { noteId } });
};

const useUnpinNote = () => {
  const [mutate] = useMutation(UnpinNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });
  if (process.env.STORYBOOK_ENV === 'true') return action('unpin-note');
  return async (noteId: string) => mutate({ variables: { noteId } });
};

const useEditNote = () => {
  const [mutate] = useMutation(EditNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  if (process.env.STORYBOOK_ENV === 'true') return action('edit-note');

  return async (noteId: Note['_id'], edit: EditNoteInput) =>
    mutate({ variables: { noteId, edit } });
};

const useDeleteNote = () => {
  const [mutate, state] = useMutation(DeleteNoteMutation, {
    refetchQueries: [AllNotesQuery],
  });

  if (process.env.STORYBOOK_ENV === 'true') return deleteNoteAction(state);

  return {
    state,
    async deleteNote(noteId: Note['_id']) {
      return mutate({ variables: { noteId } });
    },
  };
};

const deleteNoteAction = (state: MutationResult) => {
  return {
    state,
    deleteNote: fn((...args) => {
      action('delete-note')(...args);
      return { data: { deleteNote: { ...args } } };
    }),
  };
};

export {
  useAddNote,
  useAllNotes,
  useEditNote,
  useDeleteNote,
  useOpenNote,
  useOpenedNote,
  usePinNote,
  useUnpinNote,
};
