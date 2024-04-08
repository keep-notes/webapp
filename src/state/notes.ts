import { gql, useMutation } from '@apollo/client';
import { AddNoteInput } from '@/__generated__/graphql';

const AddNoteMutation = gql`
  mutation AddNoteMutation($note: AddNoteInput!) {
    addNote(note: $note) {
      title
      content
    }
  }
`;

const useAddNote = () => {
  const [mutate, state] = useMutation(AddNoteMutation);

  return {
    state,
    async addNote(note: AddNoteInput) {
      return mutate({ variables: { note } });
    },
  };
};

export { useAddNote };
