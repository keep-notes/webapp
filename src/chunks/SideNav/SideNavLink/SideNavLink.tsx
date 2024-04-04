'use client';

import cn from 'classnames';
import { SideNavLinkProps } from './SideNavLink.types';
import IconButton from '@/components/IconButton/IconButton';
import { useIsMenuExtended } from '@/state/menu-extended';

export default function SideNavLink(props: SideNavLinkProps) {
  const isExtended = useIsMenuExtended();

  return (
    <IconButton
      className={cn(
        'size-12 justify-start overflow-hidden transition-all',
        props.isSelected && 'bg-[#41331c] hover:!bg-[#41331c]',
        isExtended && 'w-64 rounded-l-none'
      )}
      title={props.page.title}
    >
      <div className="flex gap-4">
        <props.page.Icon size={24} />
        <div className="w-max">{props.page.title}</div>
      </div>
    </IconButton>
  );
}
