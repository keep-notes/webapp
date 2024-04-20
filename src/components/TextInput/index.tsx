import { useId } from 'react';
import { TextInputProps } from './types';
import TextBox from '@/components/TextBox';

export default function TextInput(props: TextInputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${id}textBox`} className="text-sm text-neutral-400">
        {props.label}
      </label>
      <TextBox id={`${id}textBox`} {...props._input} />
      {props.error && <div className="text-sm text-red-300">{props.error}</div>}
    </div>
  );
}
