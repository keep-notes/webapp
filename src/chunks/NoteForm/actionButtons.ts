import {
  MdOutlineArchive,
  MdOutlineEdit,
  MdOutlineNotificationAdd,
  MdRedo,
  MdUndo,
} from 'react-icons/md';
import { ActionButton } from './NoteForm.types';

export const actionButtons: ActionButton[] = [
  {
    title: 'Remind me',
    Icon: MdOutlineNotificationAdd,
  },
  {
    title: 'Archive',
    Icon: MdOutlineArchive,
  },
  {
    title: 'Add label',
    Icon: MdOutlineEdit,
  },
  {
    title: 'Undo',
    Icon: MdUndo,
  },
  {
    title: 'Redo',
    Icon: MdRedo,
  },
];
