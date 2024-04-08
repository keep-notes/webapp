import { ComponentProps } from 'react';

export interface TextBoxProps extends ComponentProps<'input'> {
  variant?: 'bordered' | 'ghost';
  asChild?: boolean;
}
