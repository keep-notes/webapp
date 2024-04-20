'use client';

import ListHeading from './ListHeading';
import { Note } from '@/__generated__/graphql';
import NoteList from '@/chunks/(authenticated)/NoteList';
import { useActiveNotes } from '@/data/notes';

export default function ActiveNotes() {
  const notes = useActiveNotes();

  if (!notes) return;

  const [pinned, unpinned] = notes.reduce(
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
          <ListHeading>Pinned</ListHeading>
          <NoteList notes={pinned} />
          <ListHeading>Others</ListHeading>
        </>
      )}
      <NoteList notes={unpinned} />
    </>
  );
}
