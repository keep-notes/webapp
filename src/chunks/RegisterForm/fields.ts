import { FormField } from './RegisterForm.types';

const fields: FormField[] = [
  {
    label: 'Email address',
    name: 'email',
    inputProps: { type: 'email' },
  },
  {
    label: 'Display name',
    name: 'name',
  },
  {
    label: 'Password',
    name: 'password',
    inputProps: { type: 'password' },
  },
  {
    label: 'Confirm password',
    name: 'confirmPassword',
    inputProps: { type: 'password' },
  },
];

export default fields;
