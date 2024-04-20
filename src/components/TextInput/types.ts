import { ComponentProps } from 'react';

export interface TextInputProps {
  /**
   * Visual label for the text box
   */
  label: string;
  /**
   * Error message to be rendered below the text box
   */
  error?: string;
  /**
   * props for the text box component
   */
  _input?: ComponentProps<'input'>;
}
