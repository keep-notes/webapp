import cn from 'classnames';
import { ComponentProps, forwardRef } from 'react';

export type InputProps = ComponentProps<'input'>;

const TextBox = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-light bg-transparent px-3 py-2',
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
