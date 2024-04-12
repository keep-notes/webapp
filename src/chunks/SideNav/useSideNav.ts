import { useState } from 'react';
import { useExtendMenu, useIsMenuExtended } from '@/data/menu-extended';

export default function useSideNav() {
  const [activeIndex] = useState(0);
  const isExtended = useIsMenuExtended();
  const extendMenu = useExtendMenu();

  const onEnter = () => extendMenu(true);
  const onLeave = () => extendMenu(false);

  return {
    activeIndex,
    events: { onEnter, onLeave },
    isExtended,
  };
}
