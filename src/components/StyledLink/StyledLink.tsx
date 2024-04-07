import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

interface StyledLinkProps extends LinkProps {
  className?: HTMLAttributes<'a'>['className'];
  children: ReactNode;
}

export default function StyledLink({ className, ...props }: StyledLinkProps) {
  return (
    <Link
      title={props.href?.toString()}
      className={cn('text-primary underline hover:brightness-75', className)}
      {...props}
    />
  );
}
