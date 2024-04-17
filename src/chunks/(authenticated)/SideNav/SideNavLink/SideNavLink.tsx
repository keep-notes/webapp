'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SideNavLinkProps } from './SideNavLink.types';
import IconButton from '@/components/IconButton/IconButton';
import { useIsMenuExtended } from '@/data/menu-extended';

export default function SideNavLink(props: SideNavLinkProps) {
  const isSelected = usePathname() === props.page.href;
  const isExtended = useIsMenuExtended();

  return (
    <Link href={props.page.href}>
      <IconButton
        className={cn(
          'size-12 justify-start overflow-hidden transition-all',
          isSelected && 'bg-[#41331c] hover:!bg-[#41331c]',
          isExtended && 'w-64 rounded-l-none'
        )}
        title={props.page.title}
      >
        <div className="flex gap-4">
          <props.page.Icon size={24} />
          <div className="w-max">{props.page.title}</div>
        </div>
      </IconButton>
    </Link>
  );
}
