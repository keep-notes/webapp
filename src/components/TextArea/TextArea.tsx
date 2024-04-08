'use client';

import { ComponentProps, forwardRef } from 'react';
import useTextArea from './useTextArea';
import TextBox from '@/components/TextBox/TextBox';
import { TextBoxProps } from '@/components/TextBox/TextBox.types';

type TextAreaProps = TextBoxProps & ComponentProps<'textarea'>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const h = useTextArea();

    return (
      <TextBox asChild {...props}>
        <textarea id={h.id} ref={ref} />
      </TextBox>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
