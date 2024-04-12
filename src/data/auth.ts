import { useMutation, useQuery } from '@apollo/client';
import { LoginInput, RegisterInput } from '@/__generated__/graphql';
import { GetAuthQuery, LoginMutation, RegisterMutation } from '@/data/gql/auth';

function useAuthUser() {
  const res = useQuery(GetAuthQuery);
  return res.data?.authUser;
}

function useLogin() {
  const [mutation] = useMutation(LoginMutation);
  return async (credentials: LoginInput) =>
    mutation({ variables: { credentials } });
}

function useRegisterUser() {
  const [mutation] = useMutation(RegisterMutation);
  return async (user: RegisterInput) => mutation({ variables: { user } });
}

export { useAuthUser, useLogin, useRegisterUser };
