'use client';

import { ComponentProps, forwardRef } from 'react';
import useTextArea from './useTextArea';
import TextBox from '@/components/TextBox/TextBox';
import { TextBoxProps } from '@/components/TextBox/TextBox.types';

export type TextAreaProps = ComponentProps<'textarea'> & TextBoxProps;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const h = useTextArea(props);

    return (
      <TextBox asChild {...props}>
        <textarea id={h.id} ref={ref} className="resize-none" />
      </TextBox>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
