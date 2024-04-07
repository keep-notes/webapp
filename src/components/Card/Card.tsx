import cn from 'classnames';
import { ComponentProps } from 'react';

export default function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('border-light rounded border p-8', className)}
      {...props}
    />
  );
}
