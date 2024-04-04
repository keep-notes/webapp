'use client';

import cn from 'classnames';
import pages from './pages';
import SideNavLink from './SideNavLink/SideNavLink';
import useSideNav from './useSideNav';

export default function SideNav() {
  const h = useSideNav();

  return (
    <nav
      className={cn({
        'flex h-full w-20 flex-col': true,
        'absolute left-0 !w-64 shadow-2xl shadow-black': h.isExtended,
      })}
      onMouseOver={h.events.onEnter}
      onMouseLeave={h.events.onLeave}
    >
      {pages.map((page, index) => (
        <SideNavLink
          key={index}
          page={page}
          isSelected={h.activeIndex === index}
        />
      ))}
    </nav>
  );
}
