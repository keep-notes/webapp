import HeaderAuth from '@/chunks/(authenticated)/Header/HeaderAuth/HeaderAuth';
import MenuTrigger from '@/chunks/(authenticated)/Header/MenuTrigger/MenuTrigger';
import SearchBox from '@/chunks/(authenticated)/Header/SearchBox/SearchBox';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-light p-2">
      <div className="flex items-center gap-4 md:gap-12">
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
      </div>
      <HeaderAuth />
    </header>
  );
}
