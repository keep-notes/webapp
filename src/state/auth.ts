import { gql, useMutation, useQuery } from '@apollo/client';
import { LoginInput, RegisterInput } from '@/__generated__/graphql';

const GetAuthQuery = gql`
  query AuthQuery {
    authUser {
      _id
      name
      email
    }
  }
`;

const GetAuthMock = {
  request: {
    query: GetAuthQuery,
  },
  result: {
    data: {
      authUser: {
        _id: 'id',
        email: 'email@example.com',
        name: 'John Doe',
      },
    },
  },
};

const RegisterMutation = gql`
  mutation RegisterMutation($user: RegisterInput!) {
    register(user: $user) {
      token
    }
  }
`;

const LoginMutation = gql`
  mutation LoginMutation($credentials: LoginInput!) {
    login(credentials: $credentials) {
      token
    }
  }
`;

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

export { GetAuthMock, useAuthUser, useLogin, useRegisterUser };
