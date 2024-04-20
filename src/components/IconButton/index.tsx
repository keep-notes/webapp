'use client';

import cn from 'classnames';
import { IconButtonProps } from './types';

export default function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        'inline-grid place-items-center rounded-full p-3',
        'hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
