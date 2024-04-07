import cn from 'classnames';
import { ButtonProps } from './Button.types';

export default function Button({
  className,
  variant = 'ghost',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-grid h-10 place-items-center whitespace-nowrap rounded-md px-4 text-sm font-medium transition-colors',
        'hover:brightness-90 disabled:pointer-events-none disabled:opacity-50',
        className,
        {
          'hover:bg-accent': variant === 'ghost',
          'bg-primary text-dark': variant === 'solid',
        }
      )}
      {...props}
    />
  );
}
