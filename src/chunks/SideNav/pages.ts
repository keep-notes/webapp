import { IconType } from 'react-icons';
import {
  MdNotificationsNone,
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineEdit,
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
    href: '/notes',
  },
  {
    Icon: MdNotificationsNone,
    title: 'Reminders',
    href: '/reminders',
  },
  {
    Icon: MdOutlineEdit,
    title: 'Edit labels',
    href: '/labels',
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
