import { useState } from 'react';
import { Note } from '@/__generated__/graphql';
import { useAllNotes } from '@/data/notes';

export default function useNoteList() {
  const notes = useAllNotes();
  const [openedNote, setOpenedNote] = useState<Note | undefined>();

  const open = (note: Note) => setOpenedNote(note);
  const close = () => setOpenedNote(undefined);

  return { close, notes, open, openedNote };
}
