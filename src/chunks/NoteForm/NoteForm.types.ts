import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { IconType } from 'react-icons';

export type FieldName = 'title' | 'content';
export type Values = Record<FieldName, string>;

export interface Events {
  blur: FocusEventHandler<HTMLDivElement>;
  close: MouseEventHandler<HTMLButtonElement>;
  focus: FocusEventHandler<HTMLDivElement>;
}

type InputBox = HTMLTextAreaElement | HTMLInputElement;
export interface TypingEvents {
  onChange: ChangeEventHandler<InputBox>;
  onKeyUp: KeyboardEventHandler<InputBox>;
  onKeyDown: KeyboardEventHandler<InputBox>;
}

export interface ActionButton {
  Icon: IconType;
  title: string;
  action: MouseEventHandler<HTMLButtonElement>;
  disabled: false | (() => boolean);
}
