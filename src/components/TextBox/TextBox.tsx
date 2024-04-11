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
          {
            'rounded-md border border-light py-2': variant === 'bordered',
            'placeholder:font-bold placeholder:text-neutral-400 focus:outline-none':
              variant === 'ghost',
          },
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
