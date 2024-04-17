import { useEffect, useId } from 'react';
import { TextAreaProps } from './TextArea';

export default function useTextArea(props: TextAreaProps) {
  const id = useId() + 'textarea';

  useEffect(() => {
    const elem = document.getElementById(id)! as HTMLTextAreaElement;

    const handleInput = () => {
      elem.style.height = 'auto';
      elem.style.height = `${elem.scrollHeight}px`;
    };

    handleInput();
    elem.addEventListener('input', handleInput);

    return () => {
      elem.removeEventListener('input', handleInput);
    };
  }, [id, props.value]);

  return { id };
}
