import { useEffect, useId } from 'react';

export default function useTextArea() {
  const id = useId() + 'textarea';

  useEffect(() => {
    const elem = document.getElementById(id)! as HTMLTextAreaElement;

    const handleInput = () => {
      if (elem.value.length) {
        elem.style.height = 'auto';
        elem.style.height = `${elem.scrollHeight}px`;
      } else {
        elem.style.height = '20px';
      }
    };

    handleInput();
    elem.addEventListener('input', handleInput);

    return () => {
      elem.removeEventListener('input', handleInput);
    };
  }, [id]);

  return { id };
}
