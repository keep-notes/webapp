'use client';

import fields from './fields';
import useLoginForm from './hooks';
import Button from '@/components/Button';
import Card from '@/components/Card';
import StyledLink from '@/components/StyledLink';
import TextInput from '@/components/TextInput';

export default function LoginForm() {
  const h = useLoginForm();

  return (
    <Card className="flex flex-col gap-6 md:min-w-96 lg:grid lg:w-[60em] lg:grid-cols-2 lg:items-center">
      <form className="flex flex-col gap-6" onSubmit={h.onSubmit}>
        <h1 className="text-lg font-bold">Sign in</h1>
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
        <Button type="submit" variant="solid" disabled={h.loading}>
          Sign in
        </Button>
      </form>
      <div className="flex flex-col items-center gap-4">
        <div>or</div>
        <StyledLink href="/register" className="text-xl font-semibold">
          Create an account
        </StyledLink>
        <div>if you don&apos;t already have one</div>
      </div>
    </Card>
  );
}
