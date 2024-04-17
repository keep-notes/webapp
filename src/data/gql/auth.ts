import { gql } from '@apollo/client';
import { faker } from '@faker-js/faker';
import { User } from '@/__generated__/graphql';

const fakeUser: User = {
  _id: faker.string.uuid(),
  email: faker.internet.email(),
  name: faker.person.fullName(),
  password: faker.internet.password(),
  lastLogin: faker.date.past(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  notes: [],
  archived: [],
  trashed: [],
};

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
    data: { authUser: fakeUser },
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

export { fakeUser, GetAuthMock, GetAuthQuery, LoginMutation, RegisterMutation };
