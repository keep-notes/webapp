'use client';

import useNoteForm from './useNoteForm';
import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import TextArea from '@/components/TextArea/TextArea';
import TextBox from '@/components/TextBox/TextBox';

export default function NoteForm() {
  const h = useNoteForm();

  return (
    <div
      ref={h.container}
      className="mx-auto my-4 flex max-h-[80vh] max-w-2xl cursor-text flex-col gap-4 overflow-hidden rounded-lg border-2 border-light py-1 shadow-xl"
      onFocus={h.events.focus}
      onBlur={h.events.blur}
    >
      {h.expanded && (
        <TextBox
          variant="ghost"
          placeholder="Title"
          className="mx-2"
          {...h.typingEvents('title')}
        />
      )}
      <div className="flex-1 overflow-y-auto p-2">
        <TextArea
          value={h.values.content}
          variant="ghost"
          placeholder="Take a note..."
          className="h-5"
          {...h.typingEvents('content')}
        />
      </div>
      {h.expanded && (
        <footer className="flex justify-between px-2">
          <div className="flex items-center gap-4">
            {h.actions.map((btn, index) => (
              <IconButton
                key={index}
                title={btn.title}
                onClick={btn.action}
                disabled={btn.disabled && btn.disabled()}
              >
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
