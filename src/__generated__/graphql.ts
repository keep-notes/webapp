/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AddNoteInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String']['output'];
  user: User;
};

export type EditNoteInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote: Note;
  deleteNote: Array<Note>;
  editNote: Note;
  login: Auth;
  register: Auth;
};


export type MutationAddNoteArgs = {
  note: AddNoteInput;
};


export type MutationDeleteNoteArgs = {
  noteId: Scalars['String']['input'];
};


export type MutationEditNoteArgs = {
  edit: EditNoteInput;
  noteId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationRegisterArgs = {
  user: RegisterInput;
};

export type Note = {
  __typename?: 'Note';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  authUser?: Maybe<User>;
  menuExtended?: Maybe<Scalars['Boolean']['output']>;
  search?: Maybe<Scalars['String']['output']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  notes: Array<Note>;
  password: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type AuthQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQueryQuery = { __typename?: 'Query', authUser?: { __typename?: 'User', _id: string, name: string, email: string } | null };

export type RegisterMutationMutationVariables = Exact<{
  user: RegisterInput;
}>;


export type RegisterMutationMutation = { __typename?: 'Mutation', register: { __typename?: 'Auth', token: string } };

export type LoginMutationMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string } };

export type GetMenuExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuExtendedQuery = { __typename?: 'Query', menuExtended?: boolean | null };

export type GetSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSearchQuery = { __typename?: 'Query', search?: string | null };


export const AuthQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AuthQueryQuery, AuthQueryQueryVariables>;
export const RegisterMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterMutationMutation, RegisterMutationMutationVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const GetMenuExtendedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuExtended"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuExtended"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]} as unknown as DocumentNode<GetMenuExtendedQuery, GetMenuExtendedQueryVariables>;
export const GetSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]} as unknown as DocumentNode<GetSearchQuery, GetSearchQueryVariables>;