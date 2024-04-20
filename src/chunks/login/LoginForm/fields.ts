import { FormField } from './types';

const fields: FormField[] = [
  {
    label: 'Email address',
    name: 'email',
    inputProps: { type: 'email', autoComplete: 'email' },
  },
  {
    label: 'Password',
    name: 'password',
    inputProps: { type: 'password', autoComplete: 'current-password' },
  },
];

export default fields;
