import { useOpenedNote, useOpenNote } from '@/data/notes';

export default function useNoteListSection() {
  const openedNote = useOpenedNote();
  const open = useOpenNote();

  return { open, openedNote };
}
