'use client';

import useNoteList from './useNoteList';
import NoteListSectionHeading from '@/chunks/NoteList/NoteListSectionHeading/NoteListSectionHeading';
import { Note } from '@/__generated__/graphql';
import NoteListSection from '@/chunks/NoteList/NoteListSection/NoteListSection';
import NoteModal from '@/fragments/NoteModal/NoteModal';

export default function NoteList() {
  const h = useNoteList();

  if (!h.notes) return;

  const [pinned, unpinned] = h.notes.reduce(
    ([pinned, unpinned], note) => {
      note.isPinned ? pinned.push(note) : unpinned.push(note);
      return [pinned, unpinned];
    },
    [Array<Note>(), Array<Note>()]
  );

  return (
    <>
      {pinned.length > 0 && (
        <>
          <NoteListSectionHeading>Pinned</NoteListSectionHeading>
          <NoteListSection notes={pinned} />
          <NoteListSectionHeading>Others</NoteListSectionHeading>
        </>
      )}
      <NoteListSection notes={unpinned} />
      <NoteModal />
    </>
  );
}
