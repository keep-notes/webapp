import { ComponentProps } from 'react';

export interface IconButtonProps extends ComponentProps<'button'> {
  /**
   * Rendered as an explanatory tooltip
   */
  title: string;
}
