import { useRef, useState } from 'react';
import { Events } from './NoteForm.types';

export default function useNoteForm() {
  const [expanded, setExpanded] = useState(false);
  const refs = {
    container: useRef<HTMLDivElement>(null),
    content: useRef<HTMLTextAreaElement>(null),
    title: useRef<HTMLInputElement>(null),
  };

  const events: Events = {
    blur(event) {
      const contentIsEmpty = !refs.content.current?.value.length;
      const focusIsOutside =
        !event.relatedTarget ||
        !refs.container.current?.contains(event.relatedTarget);

      if (contentIsEmpty && focusIsOutside) setExpanded(false);
    },
    focus() {
      setExpanded(true);
    },
  };

  return { events, expanded, refs };
}
