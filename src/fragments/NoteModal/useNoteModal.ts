import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { MdOutlineDelete, MdRedo, MdUndo } from 'react-icons/md';
import { InputExtras } from './NoteModal.types';
import {
  useDeleteNote,
  useEditNote,
  useOpenedNote,
  useOpenNote,
  usePinNote,
  useUnpinNote,
} from '@/data/notes';
import {
  ActionButton,
  FieldName,
  Values,
} from '@/chunks/NoteForm/NoteForm.types';

let typingTimer: ReturnType<typeof setTimeout>;

export default function useNoteModal() {
  const note = useOpenedNote();
  const open = useOpenNote();
  const { enqueueSnackbar } = useSnackbar();
  const [isPinned, setIsPinned] = useState(note?.isPinned ?? false);
  const [values, setValues] = useState<Values>({
    title: note?.title ?? '',
    content: note?.content ?? '',
  });
  const editNote = useEditNote();
  const pinNote = usePinNote();
  const unpinNote = useUnpinNote();
  const { state: deleteState, deleteNote } = useDeleteNote();
  const [history, setHistory] = useState<Values[]>([]);
  const [redoStack, setRedoStack] = useState<Values[]>([]);

  useEffect(() => {
    if (note) {
      const { title, content, isPinned } = note;
      setValues({ title, content });
      setIsPinned(isPinned);
    }
  }, [note]);

  useEffect(() => {
    if (history.length) setValues(history[history.length - 1]);
  }, [history]);

  useEffect(() => {
    if (deleteState.loading) enqueueSnackbar('Deleting...');
    if (deleteState.error)
      enqueueSnackbar('Could not delete. Please try again', {
        variant: 'error',
      });
  }, [enqueueSnackbar, deleteState]);

  const saveHistory = () => setHistory([...history, values].slice(-10));

  async function save() {
    note && (await editNote(note._id, { ...values }));
    saveHistory();
  }

  async function close() {
    open(null);
    await save();
  }

  async function pin() {
    setIsPinned(true);
    return pinNote(note!._id);
  }

  async function unpin() {
    setIsPinned(false);
    return unpinNote(note!._id);
  }

  const inputExtras = (field: FieldName) => {
    return {
      value: values[field],
      onChange(event) {
        setValues({ ...values, [field]: event.target.value });
      },
      onKeyUp() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(save, 2000);
      },
      onKeyDown(event) {
        if (event.key === ' ') saveHistory();
        clearTimeout(typingTimer);
      },
    } satisfies InputExtras;
  };

  const actions: ActionButton[] = [
    {
      title: 'Undo',
      Icon: MdUndo,
      action() {
        setRedoStack([history[history.length - 1], ...redoStack]);
        setHistory(history.slice(0, -1));
      },
      disabled: useCallback(() => history.length === 0, [history]),
    },
    {
      title: 'Redo',
      Icon: MdRedo,
      action() {
        setHistory([...history, redoStack[0]]);
        setRedoStack(redoStack.slice(1));
      },
      disabled: useCallback(() => redoStack.length === 0, [redoStack]),
    },
    {
      title: 'Delete',
      Icon: MdOutlineDelete,
      async action() {
        const resp = await deleteNote(note!._id);
        if (resp.data.deleteNote) open(null);
      },
      disabled: false,
    },
  ];

  return { actions, close, inputExtras, isPinned, note, pin, unpin, values };
}
