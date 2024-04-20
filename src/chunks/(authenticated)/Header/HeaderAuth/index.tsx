'use client';

import cn from 'classnames';
import useHeaderAuth from './hooks';

export default function HeaderAuth() {
  const h = useHeaderAuth();

  if (!h.authUser) return;

  return (
    <div className="relative">
      {h.menuVisible && (
        <div
          onClick={h.toggleMenu}
          className="fixed left-0 top-0 z-10 h-screen w-screen cursor-pointer bg-[#00000088]"
        />
      )}
      <button
        onClick={h.toggleMenu}
        className="mx-2 grid size-9 place-items-center rounded-full bg-violet-800 font-bold"
      >
        {h.authUser.name[0]}
      </button>
      <div
        role="menu"
        className={cn(
          'absolute right-0 z-20 my-2 w-64 overflow-hidden rounded-lg bg-neutral-700 shadow-lg transition-opacity',
          h.menuVisible ? 'h-max' : 'h-0 opacity-0'
        )}
      >
        <div className="border-b border-light p-4">
          <div className="text-xl font-bold">{h.authUser.name}</div>
          <div className="text-neutral-400">{h.authUser.email}</div>
        </div>
        <div className="flex flex-col">
          <button
            role="menuitem"
            className="p-4 text-center hover:bg-accent"
            onClick={h.logOut}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
