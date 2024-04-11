import { gql, useMutation, useQuery } from '@apollo/client';
import { Draft, UpdateDraftInput } from '@/__generated__/graphql';

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

const useDraft = () => {
  const res = useQuery(GetDraftQuery);
  return res.data?.authUser.draft as Draft | null;
};

const useUpdateDraft = () => {
  const [mutate] = useMutation(UpdateDraftMutation);
  return async (draft: UpdateDraftInput) => mutate({ variables: { draft } });
};

export { useDraft, useUpdateDraft };
