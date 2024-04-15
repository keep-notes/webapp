import { useState } from 'react';
import { Note } from '@/__generated__/graphql';
import { useAllNotes } from '@/data/notes';

export default function useNoteList() {
  const notes = useAllNotes();
  return { notes };
}
