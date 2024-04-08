import { FocusEventHandler, MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

export interface Events {
  blur: FocusEventHandler<HTMLDivElement>;
  close: MouseEventHandler<HTMLButtonElement>;
  focus: FocusEventHandler<HTMLDivElement>;
}

export interface ActionButton {
  Icon: IconType;
  title: string;
}
