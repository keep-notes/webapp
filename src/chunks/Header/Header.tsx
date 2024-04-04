import MenuTrigger from '@/chunks/Header/MenuTrigger/MenuTrigger';
import SearchBox from '@/chunks/Header/SearchBox/SearchBox';

export default function Header() {
  return (
    <header className="flex items-center gap-4 border-b border-[#5f6368] p-2 md:gap-12">
      <div className="flex items-center gap-4">
        <MenuTrigger />
        <h1 className="text-xl">MyKeep</h1>
      </div>
      <div className="hidden md:inline-block">
        <SearchBox />
      </div>
      <div className="md:hidden">
        <SearchBox isCompact />
      </div>
    </header>
  );
}
