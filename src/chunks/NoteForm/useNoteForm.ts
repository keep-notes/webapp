import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { Events } from './NoteForm.types';
import { useAuthUser } from '@/state/auth';
import { useAddNote } from '@/state/notes';

export default function useNoteForm() {
  const { enqueueSnackbar } = useSnackbar();
  const authUser = useAuthUser();
  const {
    addNote,
    state: { loading, error },
  } = useAddNote();
  const [expanded, setExpanded] = useState(false);
  const refs = {
    container: useRef<HTMLDivElement>(null),
    content: useRef<HTMLTextAreaElement>(null),
    title: useRef<HTMLInputElement>(null),
  };

  if (loading) enqueueSnackbar('Saving...');
  if (error)
    enqueueSnackbar('Could not save. Please try again', { variant: 'error' });

  const events: Events = {
    async blur(event) {
      const title = refs.title.current?.value ?? '';
      const content = refs.content.current?.value ?? '';

      if (refs.content.current && refs.title.current) {
        const contentIsEmpty = !content.length && !title.length;
        const focusIsOutside =
          !event.relatedTarget ||
          !refs.container.current?.contains(event.relatedTarget);

        if (contentIsEmpty && focusIsOutside) {
          setExpanded(false);
        } else if (focusIsOutside) {
          const resp = await addNote({ title, content, userId: authUser._id });
          if (resp.data.addNote) {
            enqueueSnackbar('Success!', { variant: 'success' });
            refs.content.current.value = '';
            refs.title.current.value = '';
          }
        }
      }
    },
    focus() {
      setExpanded(true);
    },
    close() {
      setExpanded(false);
    },
  };

  return { events, expanded, refs };
}
