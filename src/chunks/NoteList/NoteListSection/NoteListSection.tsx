import { NoteListSectionProps } from './NoteListSection.types';
import useNoteListSection from './useNoteListSection';
import Card from '@/components/Card/Card';

export default function NoteListSection(props: NoteListSectionProps) {
  const h = useNoteListSection();

  return (
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
  );
}
