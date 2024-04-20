'use client';

import NoteList from '@/chunks/(authenticated)/NoteList';
import { useTrashedNotes } from '@/data/notes';

export default function Index() {
  const notes = useTrashedNotes();

  if (!notes) return;

  return <NoteList notes={notes} />;
}
