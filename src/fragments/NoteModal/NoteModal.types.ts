import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { Note } from '@/__generated__/graphql';

export interface NoteModalProps {
  note: Note | undefined;
  onClose: () => void;
}

type InputBox = HTMLTextAreaElement | HTMLInputElement;
export interface InputExtras {
  value: string;
  onChange: ChangeEventHandler<InputBox>;
  onKeyUp: KeyboardEventHandler<InputBox>;
  onKeyDown: KeyboardEventHandler<InputBox>;
}
