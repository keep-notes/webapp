import { ChangeEventHandler, KeyboardEventHandler } from 'react';

type InputBox = HTMLTextAreaElement | HTMLInputElement;

export interface InputExtras {
  value: string;
  onChange: ChangeEventHandler<InputBox>;
  onKeyUp: KeyboardEventHandler<InputBox>;
  onKeyDown: KeyboardEventHandler<InputBox>;
}
