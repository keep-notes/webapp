import { gql } from '@apollo/client';

const GetDraftQuery = gql`
  query DraftQuery {
    authUser {
      draft {
        content
        title
      }
    }
  }
`;

const UpdateDraftMutation = gql`
  mutation DraftMutation($draft: UpdateDraftInput!) {
    updateDraft(draft: $draft) {
      _id
      title
      content
    }
  }
`;

export { GetDraftQuery, UpdateDraftMutation };
