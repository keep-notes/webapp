import { InputHTMLAttributes } from 'react';

export interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface FormField {
  label: string;
  name: keyof FormData;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
