import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import {
  MdOutlineArchive,
  MdOutlineDelete,
  MdRedo,
  MdUndo,
} from 'react-icons/md';
import { InputExtras } from './types';
import {
  useDeleteNote,
  useEditNote,
  useOpenedNote,
  useOpenNote,
} from '@/data/notes';
import {
  ActionButton,
  FieldName,
  Values,
} from '@/chunks/(authenticated)/NoteForm/types';

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
  const { state: deleteState, deleteNote } = useDeleteNote();
  const [history, setHistory] = useState<Values[]>([]);
  const [redoStack, setRedoStack] = useState<Values[]>([]);

  useEffect(() => {
    if (note) {
      const { title, content, isPinned } = note;
      setValues({ title, content });
      setIsPinned(isPinned);
      reset();
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

  function reset() {
    setHistory([]);
    setRedoStack([]);
  }

  async function save() {
    note && (await editNote(note._id, { ...values }));
    saveHistory();
  }

  async function close() {
    open(null);
    await save();
  }

  async function pin(isPinned = true) {
    setIsPinned(isPinned);
    return editNote(note!._id, { isPinned });
  }

  const unpin = () => pin(false);

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
      title: 'Archive',
      Icon: MdOutlineArchive,
      async action() {
        editNote(note!._id, { isArchived: true });
        await close();
      },
      disabled: false,
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

  return {
    actions,
    close,
    inputExtras,
    isPinned,
    note,
    pin,
    unpin,
    values,
  };
}
