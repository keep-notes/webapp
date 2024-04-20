'use client';

import fields from './fields';
import useRegisterForm from './hooks';
import StyledLink from '@/components/StyledLink';
import Button from '@/components/Button';
import Card from '@/components/Card';
import TextInput from '@/components/TextInput';

export default function RegisterForm() {
  const h = useRegisterForm();

  return (
    <Card className="flex flex-col gap-6 md:min-w-96 lg:grid lg:w-[60em] lg:grid-cols-2 lg:items-center">
      <form className="flex flex-col gap-6" onSubmit={h.onSubmit}>
        <h1 className="text-lg font-bold">Create an account</h1>
        <div className="flex flex-col gap-4">
          {fields.map((field) => (
            <TextInput
              key={field.name}
              label={field.label}
              _input={{ ...field.inputProps, ...h.form.register(field.name) }}
              error={h.form.formState.errors?.[field.name]?.message}
            />
          ))}
        </div>
        <Button type="submit" variant="solid">
          Sign me up
        </Button>
      </form>
      <div className="flex flex-col items-center gap-4">
        <div>or</div>
        <StyledLink href="/login" className="text-xl font-semibold">
          Sign In
        </StyledLink>
        <div>if you already have an account</div>
      </div>
    </Card>
  );
}
