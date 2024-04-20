import { ChangeEventHandler, FocusEventHandler, useRef, useState } from 'react';
import { useGetQuery, useSetQuery } from '@/data/search';

export default function useSearchBox() {
  const [focused, setFocused] = useState(false);
  const refs = {
    container: useRef<HTMLDivElement>(null),
    input: useRef<HTMLInputElement>(null),
  };
  const value = useGetQuery();
  const setValue = useSetQuery();

  const blur = () => setFocused(false);

  const clearValue = () => {
    setValue('');
    focus();
  };

  const focus = () => {
    setFocused(true);
    refs.input.current?.focus();
  };

  const onBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    if (!refs.container.current?.contains(event.relatedTarget)) {
      setFocused(false);
    }
  };

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return {
    events: { onBlur, onChangeValue },
    actions: { blur, clearValue, focus },
    focused,
    refs,
    value,
  };
}
