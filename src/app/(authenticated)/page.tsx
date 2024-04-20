import NoteForm from '@/chunks/(authenticated)/NoteForm';
import ActiveNotes from '@/chunks/(authenticated)/ActiveNotes';

export default function Home() {
  return (
    <main>
      <NoteForm />
      <ActiveNotes />
    </main>
  );
}
