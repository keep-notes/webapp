import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdRedo, MdUndo } from 'react-icons/md';
import { ActionButton, Events, FieldName, TypingEvents, Values } from './types';
import { useAddNote } from '@/data/notes';
import { getLocalItem, setLocalItem } from '@/data/local';
import { useAuthUser } from '@/data/auth';

let typingTimer: ReturnType<typeof setTimeout>;

export default function useNoteForm() {
  const [draft, setDraft] = useState<Values | undefined>(undefined);
  const [expanded, setExpanded] = useState(false);
  const [history, setHistory] = useState<Values[]>([]);
  const [redoStack, setRedoStack] = useState<Values[]>([]);
  const [values, setValues] = useState<Values>({ title: '', content: '' });
  const container = useRef<HTMLDivElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const { _id: userId } = useAuthUser() ?? {};
  const { addNote, state } = useAddNote();

  useEffect(() => {
    if (history.length) setValues(history[history.length - 1]);
  }, [history]);

  useEffect(() => {
    if (state.loading) enqueueSnackbar('Saving...');
    if (state.error)
      enqueueSnackbar('Could not save. Please try again', { variant: 'error' });
  }, [enqueueSnackbar, state]);

  useEffect(() => {
    getLocalItem('draft').then(setDraft);
  }, []);

  useEffect(() => {
    if (draft) setValues({ title: draft.title, content: draft.content });
  }, [draft]);

  const saveHistory = () => setHistory([...history, values].slice(-10));

  const saveDraft = async () => {
    await updateDraft(values);
    saveHistory();
  };

  const reset = async () => {
    const values = { title: '', content: '' };
    setExpanded(false);
    setValues(values);
    setHistory([]);
    setRedoStack([]);
    clearTimeout(typingTimer);
    await updateDraft(values);
  };

  const updateDraft = async (values: Values) => {
    await setLocalItem('draft', values);
    setDraft(values);
  };

  const events: Events = {
    async blur(event) {
      const related = event.relatedTarget;
      const contentIsEmpty = Object.values(values).every(
        (v) => v.trim().length === 0
      );
      const focusIsOutside = !related || !container.current?.contains(related);

      if (contentIsEmpty && focusIsOutside) {
        setValues({ title: '', content: '' });
        setExpanded(false);
      } else if (focusIsOutside) {
        const resp = await addNote({ ...values, userId });
        if (resp.data.addNote) {
          await reset();
          enqueueSnackbar('Success!', { variant: 'success' });
        }
      }
    },
    focus: () => setExpanded(true),
    close: () => setExpanded(false),
  };

  const typingEvents = (field: FieldName) => {
    return {
      onChange(event) {
        setValues({ ...values, [field]: event.target.value });
      },
      onKeyUp() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(saveDraft, 2000);
      },
      onKeyDown(event) {
        if ([' ', 'Enter'].includes(event.key)) saveHistory();
        clearTimeout(typingTimer);
      },
    } satisfies TypingEvents;
  };

  const actions: ActionButton[] = [
    {
      title: 'Undo',
      Icon: MdUndo,
      action: () => {
        setRedoStack([history[history.length - 1], ...redoStack]);
        setHistory(history.slice(0, -1));
      },
      disabled: useCallback(() => history.length === 0, [history]),
    },
    {
      title: 'Redo',
      Icon: MdRedo,
      action: () => {
        setHistory([...history, redoStack[0]]);
        setRedoStack(redoStack.slice(1));
      },
      disabled: useCallback(() => redoStack.length === 0, [redoStack]),
    },
  ];

  return { actions, events, expanded, container, typingEvents, values };
}
