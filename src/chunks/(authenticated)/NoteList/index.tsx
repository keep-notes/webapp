import { NoteListProps } from './types';
import useNoteList from './hooks';
import NoteModal from '@/chunks/(authenticated)/NoteModal';
import Card from '@/components/Card';

export default function NoteList(props: NoteListProps) {
  const h = useNoteList();

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {props.notes.map((note) => (
          <Card
            key={note._id}
            className="flex min-h-52 flex-col gap-4"
            onClick={() => h.open(note)}
          >
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="line-clamp-4">{note.content}</p>
          </Card>
        ))}
      </div>
      <NoteModal />
    </>
  );
}
