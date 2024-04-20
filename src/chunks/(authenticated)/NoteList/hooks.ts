import { useOpenedNote, useOpenNote } from '@/data/notes';

export default function useNoteList() {
  const openedNote = useOpenedNote();
  const open = useOpenNote();

  return { open, openedNote };
}
