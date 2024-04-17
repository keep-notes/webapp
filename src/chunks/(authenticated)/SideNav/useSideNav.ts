import { useExtendMenu, useIsMenuExtended } from '@/data/menu-extended';

export default function useSideNav() {
  const isExtended = useIsMenuExtended();
  const extendMenu = useExtendMenu();

  const onEnter = () => extendMenu(true);
  const onLeave = () => extendMenu(false);

  return {
    events: { onEnter, onLeave },
    isExtended,
  };
}
