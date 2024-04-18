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

export type Draft = {
  __typename?: 'Draft';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type EditNoteInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote: Note;
  deleteNote: Note;
  editNote: Note;
  login: Auth;
  register: Auth;
  restoreNote: Note;
  updateDraft: Draft;
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


export type MutationRestoreNoteArgs = {
  noteId: Scalars['String']['input'];
};


export type MutationUpdateDraftArgs = {
  draft: UpdateDraftInput;
};

export type Note = {
  __typename?: 'Note';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  isArchived: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isTrashed: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  authUser?: Maybe<User>;
  menuExtended?: Maybe<Scalars['Boolean']['output']>;
  openedNote?: Maybe<Note>;
  query?: Maybe<Scalars['String']['output']>;
  search: Array<Note>;
};


export type QuerySearchArgs = {
  query: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateDraftInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  archived: Array<Note>;
  createdAt: Scalars['Date']['output'];
  draft?: Maybe<Draft>;
  email: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  notes: Array<Note>;
  password: Scalars['String']['output'];
  trashed: Array<Note>;
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

export type DraftQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DraftQueryQuery = { __typename?: 'Query', authUser?: { __typename?: 'User', draft?: { __typename?: 'Draft', content: string, title: string } | null } | null };

export type DraftMutationMutationVariables = Exact<{
  draft: UpdateDraftInput;
}>;


export type DraftMutationMutation = { __typename?: 'Mutation', updateDraft: { __typename?: 'Draft', _id: string, title: string, content: string } };

export type UserNotesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type UserNotesQueryQuery = { __typename?: 'Query', authUser?: { __typename?: 'User', notes: Array<{ __typename?: 'Note', _id: string, content: string, title: string, isPinned: boolean, isArchived: boolean, isTrashed: boolean }>, trashed: Array<{ __typename?: 'Note', _id: string, content: string, title: string, isPinned: boolean, isArchived: boolean, isTrashed: boolean }>, archived: Array<{ __typename?: 'Note', _id: string, content: string, title: string, isPinned: boolean, isArchived: boolean, isTrashed: boolean }> } | null };

export type GetOpenedNoteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenedNoteQuery = { __typename?: 'Query', openedNote?: { __typename?: 'Note', _id: string, content: string, title: string, isPinned: boolean } | null };

export type AddNoteMutationMutationVariables = Exact<{
  note: AddNoteInput;
}>;


export type AddNoteMutationMutation = { __typename?: 'Mutation', addNote: { __typename?: 'Note', title: string, content: string } };

export type EditNoteMutationMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
  edit: EditNoteInput;
}>;


export type EditNoteMutationMutation = { __typename?: 'Mutation', editNote: { __typename?: 'Note', _id: string, content: string, title: string } };

export type DeleteNoteMutationMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
}>;


export type DeleteNoteMutationMutation = { __typename?: 'Mutation', deleteNote: { __typename?: 'Note', title: string, content: string } };

export type GetMenuExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuExtendedQuery = { __typename?: 'Query', menuExtended?: boolean | null };

export type GetSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSearchQuery = { __typename?: 'Query', query?: string | null };


export const AuthQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AuthQueryQuery, AuthQueryQueryVariables>;
export const RegisterMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterMutationMutation, RegisterMutationMutationVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const DraftQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DraftQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<DraftQueryQuery, DraftQueryQueryVariables>;
export const DraftMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DraftMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DraftMutationMutation, DraftMutationMutationVariables>;
export const UserNotesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserNotesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isTrashed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trashed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isTrashed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archived"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isTrashed"}}]}}]}}]}}]} as unknown as DocumentNode<UserNotesQueryQuery, UserNotesQueryQueryVariables>;
export const GetOpenedNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOpenedNote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"openedNote"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}}]}}]}}]} as unknown as DocumentNode<GetOpenedNoteQuery, GetOpenedNoteQueryVariables>;
export const AddNoteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNoteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AddNoteMutationMutation, AddNoteMutationMutationVariables>;
export const EditNoteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditNoteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"edit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"edit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"edit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<EditNoteMutationMutation, EditNoteMutationMutationVariables>;
export const DeleteNoteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNoteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DeleteNoteMutationMutation, DeleteNoteMutationMutationVariables>;
export const GetMenuExtendedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuExtended"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuExtended"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]} as unknown as DocumentNode<GetMenuExtendedQuery, GetMenuExtendedQueryVariables>;
export const GetSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"query"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]} as unknown as DocumentNode<GetSearchQuery, GetSearchQueryVariables>;