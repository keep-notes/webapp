import { ComponentProps } from 'react';

export interface TextInputProps {
  label: string;
  error?: string;
  _input?: ComponentProps<'input'>;
}
