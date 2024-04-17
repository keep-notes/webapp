import { IconType } from 'react-icons';
import {
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineLightbulb,
} from 'react-icons/md';

interface Page {
  Icon: IconType;
  title: string;
  href: string;
}

const pages: Page[] = [
  {
    Icon: MdOutlineLightbulb,
    title: 'Notes',
    href: '/',
  },
  {
    Icon: MdOutlineArchive,
    title: 'Archive',
    href: '/archive',
  },
  {
    Icon: MdOutlineDelete,
    title: 'Trash',
    href: '/trash',
  },
];

export default pages;
export type { Page };
