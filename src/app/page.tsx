import Header from '@/chunks/Header/Header';
import SideNav from '@/chunks/SideNav/SideNav';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="relative flex flex-1 px-2">
        <SideNav />
        <main>Hello world</main>
      </div>
    </div>
  );
}
