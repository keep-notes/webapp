'use client';

import cn from 'classnames';
import useHeaderAuth from './useHeaderAuth';

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
        className="mx-2 grid size-10 place-items-center rounded-full border-2 border-blue-400 bg-blue-50 text-2xl text-blue-400"
      >
        {h.authUser.name[0]}
      </button>
      <div
        role="menu"
        className={cn(
          'absolute right-0 z-20 my-2 w-64 rounded-lg bg-neutral-700 shadow-lg transition-opacity',
          h.menuVisible || 'opacity-0'
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
