'use client';

import useNoteForm from './useNoteForm';
import { actionButtons } from './actionButtons';
import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import TextArea from '@/components/TextArea/TextArea';
import TextBox from '@/components/TextBox/TextBox';

export default function NoteForm() {
  const h = useNoteForm();

  return (
    <div
      ref={h.refs.container}
      className="mx-auto my-4 flex max-h-[80vh] max-w-2xl cursor-text flex-col gap-4 overflow-hidden rounded-lg border-2 border-light py-1 shadow-xl"
      onFocus={h.events.focus}
      onBlur={h.events.blur}
    >
      {h.expanded && (
        <TextBox
          ref={h.refs.title}
          variant="ghost"
          placeholder="Title"
          className="mx-2"
        />
      )}
      <div className="flex-1 overflow-y-auto p-2">
        <TextArea
          ref={h.refs.content}
          variant="ghost"
          placeholder="Take a note..."
          className="h-5 resize-none"
        />
      </div>
      {h.expanded && (
        <footer className="flex justify-between px-2">
          <div className="flex items-center gap-4">
            {actionButtons.map((btn, index) => (
              <IconButton key={index} title={btn.title}>
                <btn.Icon size={20} />
              </IconButton>
            ))}
          </div>
          <Button onClick={h.events.close}>Close</Button>
        </footer>
      )}
    </div>
  );
}
