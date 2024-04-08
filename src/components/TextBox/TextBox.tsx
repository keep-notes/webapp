import { Slot } from '@radix-ui/react-slot';
import cn from 'classnames';
import { forwardRef } from 'react';
import { TextBoxProps } from './TextBox.types';

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    { asChild = false, className, type, variant = 'bordered', ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'input';

    return (
      <Comp
        type={type}
        className={cn(
          'flex h-10 w-full items-center bg-transparent px-3',
          variant === 'bordered' && 'rounded-md border border-light py-2',
          variant === 'ghost' &&
            'placeholder:font-bold placeholder:text-neutral-300 focus:outline-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextBox.displayName = 'TextBox';

export default TextBox;
