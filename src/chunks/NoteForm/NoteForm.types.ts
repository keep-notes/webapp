import { FocusEventHandler } from 'react';
import { IconType } from 'react-icons';

export interface Events {
  blur: FocusEventHandler<HTMLDivElement>;
  focus: FocusEventHandler<HTMLDivElement>;
}

export interface ActionButton {
  Icon: IconType;
  title: string;
}
