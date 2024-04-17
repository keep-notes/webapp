import { ApolloError } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormData } from './RegisterForm.types';
import { setLocalItem } from '@/data/local';
import { useRegisterUser } from '@/data/auth';

export default function useRegisterForm() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const registerUser = useRegisterUser();

  const form = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(
      yup
        .object({
          email: yup.string().email().required().label('Email address'),
          name: yup.string().required().label('Display name'),
          password: yup.string().required().label('Password'),
          confirmPassword: yup
            .string()
            .required()
            .label('Password confirmation')
            .test('passwords-match', 'Passwords must match', function (value) {
              return this.parent.password === value;
            }),
        })
        .required()
    ),
  });

  const onSubmit = form.handleSubmit(
    async ({ email, name, password }: FormData) => {
      try {
        const resp = await registerUser({ email, name, password });
        await setLocalItem('authToken', resp.data.register.token);
        router.push('/');
      } catch (error) {
        if (error instanceof ApolloError) {
          enqueueSnackbar(error.message);
        } else throw error;
      }
    }
  );

  return { form, onSubmit };
}
