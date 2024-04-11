import cn from 'classnames';
import { ComponentProps } from 'react';

export default function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('rounded-lg border border-light p-8', className)}
      {...props}
    />
  );
}
