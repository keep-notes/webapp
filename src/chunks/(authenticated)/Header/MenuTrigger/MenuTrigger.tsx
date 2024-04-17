'use client';

import { MdMenu } from 'react-icons/md';
import IconButton from '@/components/IconButton/IconButton';
import { useToggleMenu } from '@/data/menu-extended';

export default function MenuTrigger() {
  const toggleMenu = useToggleMenu();

  return (
    <IconButton title="Main menu" onClick={toggleMenu}>
      <MdMenu size={24} />
    </IconButton>
  );
}
