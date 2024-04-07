import { InputHTMLAttributes } from 'react';

export interface FormData {
  email: string;
  password: string;
}

export interface FormField {
  label: string;
  name: keyof FormData;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
