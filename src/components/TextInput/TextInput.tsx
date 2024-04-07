import { TextInputProps } from './TextInput.types';
import TextBox from '@/components/TextBox/TextBox';

export default function TextInput(props: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-neutral-400">{props.label}</label>
      <TextBox {...props._input} />
      {props.error && <div className="text-sm text-red-300">{props.error}</div>}
    </div>
  );
}
