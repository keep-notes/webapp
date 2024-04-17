'use client';

import cn from 'classnames';
import pages from './pages';
import SideNavLink from './SideNavLink/SideNavLink';
import useSideNav from './useSideNav';

export default function SideNav() {
  const h = useSideNav();

  return (
    <nav
      className={cn(
        'absolute left-2 top-0 flex h-full w-10 flex-col bg-dark transition-all md:w-20',
        h.isExtended && '!left-0 !w-64 shadow-2xl shadow-black'
      )}
      onMouseOver={h.events.onEnter}
      onMouseLeave={h.events.onLeave}
    >
      {pages.map((page, index) => (
        <SideNavLink key={index} page={page} />
      ))}
    </nav>
  );
}
