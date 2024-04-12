import { useMutation, useQuery } from '@apollo/client';
import { action } from '@storybook/addon-actions';
import { Draft, UpdateDraftInput } from '@/__generated__/graphql';
import { GetDraftQuery, UpdateDraftMutation } from '@/data/gql/draft';

const useDraft = () => {
  const res = useQuery(GetDraftQuery);
  return res.data?.authUser.draft as Draft | null;
};

const useUpdateDraft = () => {
  const [mutate] = useMutation(UpdateDraftMutation);

  if (process.env.STORYBOOK_ENV === 'true') return action('update-draft');

  return async (draft: UpdateDraftInput) => mutate({ variables: { draft } });
};

export { useDraft, useUpdateDraft };
