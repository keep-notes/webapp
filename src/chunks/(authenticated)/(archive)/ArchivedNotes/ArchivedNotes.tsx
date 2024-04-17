'use client';

import NoteList from '@/chunks/(authenticated)/NoteList/NoteList';
import { useArchivedNotes } from '@/data/notes';

export default function ArchivedNotes() {
  const notes = useArchivedNotes();

  if (!notes) return;

  return <NoteList notes={notes} />;
}
