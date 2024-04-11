'use client';

import useNoteList from './useNoteList';
import Card from '@/components/Card/Card';
import NoteModal from '@/fragments/NoteModal/NoteModal';

export default function NoteList() {
  const h = useNoteList();

  if (!h.notes) return;

  return (
    <>
      <div className="gap-4 space-y-4 md:columns-3 lg:columns-6">
        {h.notes.map((note) => (
          <Card
            key={note._id}
            className="flex break-inside-avoid flex-col !p-4"
            onClick={() => h.open(note)}
          >
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p>{note.content}</p>
          </Card>
        ))}
      </div>
      <NoteModal
        key={h.openedNote?._id ?? 'key'}
        note={h.openedNote}
        onClose={() => h.close()}
      />
    </>
  );
}
