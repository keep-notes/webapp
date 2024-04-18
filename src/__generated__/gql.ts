/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AuthQuery {\n    authUser {\n      _id\n      name\n      email\n    }\n  }\n": types.AuthQueryDocument,
    "\n  mutation RegisterMutation($user: RegisterInput!) {\n    register(user: $user) {\n      token\n    }\n  }\n": types.RegisterMutationDocument,
    "\n  mutation LoginMutation($credentials: LoginInput!) {\n    login(credentials: $credentials) {\n      token\n    }\n  }\n": types.LoginMutationDocument,
    "\n  query DraftQuery {\n    authUser {\n      draft {\n        content\n        title\n      }\n    }\n  }\n": types.DraftQueryDocument,
    "\n  mutation DraftMutation($draft: UpdateDraftInput!) {\n    updateDraft(draft: $draft) {\n      _id\n      title\n      content\n    }\n  }\n": types.DraftMutationDocument,
    "\n  query UserNotesQuery {\n    authUser {\n      notes {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      trashed {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      archived {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n    }\n  }\n": types.UserNotesQueryDocument,
    "\n  query GetOpenedNote {\n    openedNote @client {\n      _id\n      content\n      title\n      isPinned\n    }\n  }\n": types.GetOpenedNoteDocument,
    "\n  mutation AddNoteMutation($note: AddNoteInput!) {\n    addNote(note: $note) {\n      title\n      content\n    }\n  }\n": types.AddNoteMutationDocument,
    "\n  mutation EditNoteMutation($noteId: String!, $edit: EditNoteInput!) {\n    editNote(noteId: $noteId, edit: $edit) {\n      _id\n      content\n      title\n    }\n  }\n": types.EditNoteMutationDocument,
    "\n  mutation DeleteNoteMutation($noteId: String!) {\n    deleteNote(noteId: $noteId) {\n      title\n      content\n    }\n  }\n": types.DeleteNoteMutationDocument,
    "\n  query GetMenuExtended {\n    menuExtended @client\n  }\n": types.GetMenuExtendedDocument,
    "\n  query GetSearch {\n    query @client\n  }\n": types.GetSearchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AuthQuery {\n    authUser {\n      _id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query AuthQuery {\n    authUser {\n      _id\n      name\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RegisterMutation($user: RegisterInput!) {\n    register(user: $user) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterMutation($user: RegisterInput!) {\n    register(user: $user) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginMutation($credentials: LoginInput!) {\n    login(credentials: $credentials) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation LoginMutation($credentials: LoginInput!) {\n    login(credentials: $credentials) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DraftQuery {\n    authUser {\n      draft {\n        content\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query DraftQuery {\n    authUser {\n      draft {\n        content\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DraftMutation($draft: UpdateDraftInput!) {\n    updateDraft(draft: $draft) {\n      _id\n      title\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation DraftMutation($draft: UpdateDraftInput!) {\n    updateDraft(draft: $draft) {\n      _id\n      title\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserNotesQuery {\n    authUser {\n      notes {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      trashed {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      archived {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserNotesQuery {\n    authUser {\n      notes {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      trashed {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n      archived {\n        _id\n        content\n        title\n        isPinned\n        isArchived\n        isTrashed\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOpenedNote {\n    openedNote @client {\n      _id\n      content\n      title\n      isPinned\n    }\n  }\n"): (typeof documents)["\n  query GetOpenedNote {\n    openedNote @client {\n      _id\n      content\n      title\n      isPinned\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddNoteMutation($note: AddNoteInput!) {\n    addNote(note: $note) {\n      title\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation AddNoteMutation($note: AddNoteInput!) {\n    addNote(note: $note) {\n      title\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditNoteMutation($noteId: String!, $edit: EditNoteInput!) {\n    editNote(noteId: $noteId, edit: $edit) {\n      _id\n      content\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation EditNoteMutation($noteId: String!, $edit: EditNoteInput!) {\n    editNote(noteId: $noteId, edit: $edit) {\n      _id\n      content\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteNoteMutation($noteId: String!) {\n    deleteNote(noteId: $noteId) {\n      title\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteNoteMutation($noteId: String!) {\n    deleteNote(noteId: $noteId) {\n      title\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMenuExtended {\n    menuExtended @client\n  }\n"): (typeof documents)["\n  query GetMenuExtended {\n    menuExtended @client\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSearch {\n    query @client\n  }\n"): (typeof documents)["\n  query GetSearch {\n    query @client\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;