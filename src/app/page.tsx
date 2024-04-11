import Header from '@/chunks/Header/Header';
import NoteForm from '@/chunks/NoteForm/NoteForm';
import NoteList from '@/chunks/NoteList/NoteList';
import SideNav from '@/chunks/SideNav/SideNav';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Header />
      <div className="relative flex flex-1 px-2">
        <SideNav />
        <div className="flex-1">
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </div>
  );
}
