import { ApolloError } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormData } from './LoginForm.types';
import { useLogin } from '@/state/auth';
import { setLocalItem } from '@/state/local';

export default function useLoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const login = useLogin();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(
      yup
        .object({
          email: yup.string().email().required().label('Email address'),
          password: yup.string().required().label('Password'),
        })
        .required()
    ),
  });

  const onSubmit = form.handleSubmit(async (input: FormData) => {
    try {
      setLoading(true);
      const resp = await login(input);
      await setLocalItem('authToken', resp.data.login.token);
      router.push('/');
    } catch (error) {
      if (error instanceof ApolloError) {
        enqueueSnackbar(error.message);
      } else throw error;
    } finally {
      setLoading(false);
    }
  });

  return { form, loading, onSubmit };
}
