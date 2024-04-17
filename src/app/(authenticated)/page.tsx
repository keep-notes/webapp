import NoteForm from '@/chunks/(authenticated)/NoteForm/NoteForm';
import ActiveNotes from '@/chunks/(authenticated)/ActiveNotes/ActiveNotes';

export default function Home() {
  return (
    <main>
      <NoteForm />
      <ActiveNotes />
    </main>
  );
}
